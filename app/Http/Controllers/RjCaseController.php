<?php

namespace App\Http\Controllers;

use Entities\Charge;
use Entities\Offender;
use Entities\Victim;
use Entities\FileUpload;
use Entities\Note;
use Illuminate\Http\Request;

use App\Http\Requests;
use Entities\RjCase;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Services\Charge\ChargeService;
use Services\Offender\OffenderService;
use Services\RjCase\RjCaseService;
use Services\FileUpload\FileUploadService;
use Services\User\UserService;
use Services\Utility\UtilityService;

class RjCaseController extends Controller
{

    public function __construct(RjCaseService $rjCaseService, ChargeService $chargeService, FileUploadService $fileUploadService, UserService $userService, UtilityService $utilityService)
    {
        $this->rjCaseService = $rjCaseService;
        $this->chargeService = $chargeService;
        $this->userService = $userService;
        $this->utilityService = $utilityService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $user = Auth::user();
        }

        $openCases = isset($user) && $user->role == "facilitator" ?
            $this->userService->getAllUserCasesByUserId($user->id) :
            $this->rjCaseService->getAllOpenCases()->toArray();

        $closedCases = isset($user) && $user->role !== "facilitator" ?
            $this->rjCaseService->getAllClosedCases()->toArray() :
            array();

        return response()->json(array('html' =>view('cases/index', [
            'openCases' => $openCases,
            'closedCases' => $closedCases
        ])->render()));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $charges = $this->chargeService->getAllCharges()->toArray();
        $caseFieldData = RjCase::createCaseFieldData();
        $victimFieldData = Victim::fieldData();
        $offenderFieldData = Offender::fieldData();
        $facilitators = $this->userService->getAllUsers()->toArray();
        $caseManagerData  = $this->userService->getAllUsers()->toArray();
        $caseManagerList = array();


        foreach ($caseManagerData as $key => $value) {
            if (!empty($value['username'])) {
                $caseManagerList[$key]['name'] = $value['username'];
                $caseManagerList[$key]['value'] = $value['id'];
            }
        }

        $caseFieldData['user_id']['options'] = $caseManagerList;

        return response()->json(array(
            'charges' => $charges,
            'caseFieldData' => $caseFieldData,
            'victimFieldData' => $victimFieldData,
            'offenderFieldData' => $offenderFieldData,
            'facilitators' => $facilitators
        ));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $caseFields = Schema::connection('mysql')->getColumnListing('rj_cases');

        if (isset($data['case'][0])) {
            $case = new RjCase;

            foreach($data['case'][0] as $field) {
                if (in_array($field['name'], $caseFields)) {
                    if ($this->utilityService->isDateField($field['name'])) {
                        $field['value'] = $this->utilityService->parseToMysqlDate($field['value']);
                    }

                    $case[$field['name']] = $field['value'];
                }
            }

            $case->save();
        }

        if (isset($data['victim'])) {
            $victimFields = Schema::connection('mysql')->getColumnListing('victims');

            foreach($data['victim'] as $newVictim) {
                $victim = new Victim();

                foreach($newVictim as $key => $value) {
                    if (in_array($key, $victimFields)) {
                        if ($this->utilityService->isDateField($key)) {
                            $value['value'] = $this->utilityService->parseToMysqlDate($value['value']);
                        }
                        $victim[$key] = $value['value'];
                    }
                }

                $victim->save();

                $case->victims()->attach($victim->id);
            }
        }

        if (isset($data['offender'])) {
            $offenderFields = Schema::connection('mysql')->getColumnListing('offenders');

            foreach($data['offender'] as $newOffender) {
                $offender = new Offender();

                foreach($newOffender as $key => $value) {
                    if (in_array($key, $offenderFields)) {
                        if ($this->utilityService->isDateField($key)) {
                            $value['value'] = $this->utilityService->parseToMysqlDate($value['value']);
                        }
                        $offender[$key] = $value['value'];
                    }
                }

                $offender->save();

                $case->offenders()->attach($offender->id);
            }
        }

        if (isset($data['charge'])) {
            foreach($data['charge'] as $newCharge) {
                $case->charges()->attach($newCharge);
            }
        }

        if (isset($data['facilitator'])) {
            foreach($data['facilitator'] as $newFacilitator) {
                $case->users()->attach($newFacilitator);
            }
        }

        return array(
            'status' => 'success',
            'id' => $case->id
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $token = csrf_token();
        $case = $this->rjCaseService->getCaseById($id);
        $caseFieldData = RjCase::editCaseFieldData();
        $victimFieldData = Victim::fieldData();
        $offenderFieldData = Offender::fieldData();
        $noteFieldData = Note::fieldData();
        $charges = $this->chargeService->getAllCharges()->toArray();
        $facilitators = $this->userService->getAllUsers()->toArray();
        $caseManagerData  = $this->userService->getAllUsers()->toArray();
        $caseManagerList = array();

        if (isset($case['victims'])) {
            usort($case['victims'], array($this, "compareParticipatingVictims"));
        }

        foreach ($caseManagerData as $key => $value) {
            if (!empty($value['username'])) {
                $caseManagerList[$key]['name'] = $value['username'];
                $caseManagerList[$key]['value'] = $value['id'];
            }
        }

        $caseFieldData['user_id']['options'] = $caseManagerList;

        return response()->json(array(
            'data' => $case,
            'token' => $token,
            'caseFieldData' => $caseFieldData,
            'victimFieldData' => $victimFieldData,
            'offenderFieldData' => $offenderFieldData,
            'noteFieldData' => $noteFieldData,
            'chargesData' => $charges,
            'facilitatorData' => $facilitators
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = $request->all();

        $caseFields = Schema::connection('mysql')->getColumnListing('rj_cases');

        if (isset($data)) {
            $case = RjCase::find($data['id']);

            foreach($data as $key => $value) {
                if (in_array($key, $caseFields)) {
                    if ($this->utilityService->isDateField($key)) {
                        $value = !empty($value) ? $this->utilityService->parseToMysqlDate($value) : null;
                    }

                    $case[$key] = $value;
                }
            }

            $case->save();
        }

        if (isset($data['victims'])) {
            $victimFields = Schema::connection('mysql')->getColumnListing('victims');

            foreach($data['victims'] as $newVictim) {
                $victim = Victim::find($newVictim['id']);

                foreach($newVictim as $key => $value) {
                    if (in_array($key, $victimFields)) {
                        if ($this->utilityService->isDateField($key)) {
                            $value = $this->utilityService->parseToMysqlDate($value);
                        }

                        $victim[$key] = $value;
                    }
                }

                $victim->save();
            }
        }

        if (isset($data['offenders'])) {
            $offenderFields = Schema::connection('mysql')->getColumnListing('offenders');

            foreach($data['offenders'] as $newOffender) {
                $offender = Offender::find($newOffender['id']);

                foreach($newOffender as $key => $value) {
                    if (in_array($key, $offenderFields)) {
                        if ($this->utilityService->isDateField($key)) {
                            $value = $this->utilityService->parseToMysqlDate($value);
                        }

                        $offender[$key] = $value;
                    }
                }

                $offender->save();
            }
        }


        if (isset($data['charges'])) {
            $existingCharges = RjCase::find($data['id'])->charges;

            foreach($data['charges'] as $newCharge) {
                if (!in_array($newCharge, $existingCharges->toArray())) {
                    $case->charges()->detach();
                }
            }

            foreach($data['charges'] as $newCharge) {
                $case->charges()->attach($newCharge);
            }
        }

        if (isset($data['facilitators'])) {
            $existingFacilitators = RjCase::find($data['id'])->users;

            foreach($data['facilitators'] as $newFacilitator) {
                if (!in_array($newFacilitator, $existingFacilitators->toArray())) {
                    $case->users()->detach();
                }
            }

            foreach($data['facilitators'] as $newFacilitator) {
                $case->users()->attach($newFacilitator);
            }
        }


        return response()->json(array('id' => $case->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (isset($id)) {
            $case = RjCase::find($id);

            if (isset($case)) {

                $case->victims()->detach();
                $case->offenders()->detach();
                $case->charges()->detach();
                $case->users()->detach();
                $case->files()->delete();
                $case->notes()->delete();
                $case->delete();

                return;
            }

            return;
        }

        return;
    }

    public function checkIfExists(Request $request) {
        $data = $request->all();

        if (RjCase::where('caseId', '=', $data['caseId'])->exists()) {
            return "false";
        }

        return "true";
    }

    public function compareParticipatingVictims($a, $b) {
        $mapping = array(
            'Yes' => 1,
            'No' => 0
        );

        if (isset($mapping[$a['participating']])) {
            if ($mapping[$a['participating']] === 'Yes' && isset($a['bestContact'])) {

                $a = isset($mapping[$a['bestContact']]) ? $mapping[$a['participating']] + $mapping[$a['bestContact']] : $mapping[$a['participating']];
            } else {
                $a = $mapping[$a['participating']];
            }
        } else {
            $a = 0;
        }

        if (isset($mapping[$b['participating']])) {
            if ($mapping[$b['participating']] === 1 && isset($b['bestContact'])) {

                $b = isset($mapping[$b['bestContact']]) ? $mapping[$b['participating']] + $mapping[$b['bestContact']] : $mapping[$b['participating']];
            } else {
                $b = $mapping[$b['participating']];
            }
        } else {
            $b = 0;
        }

        if ($a == $b) {

            return 0;
        }

        return ($a > $b) ? -1 : 1;
    }

    public function compareBestContactVictims($a, $b) {
        $mapping = array(
            'Yes' => 1,
            'No' => 0,
        );

        if (isset($a['participating'])) {
            if ($a['participating'] === 'No') {

                return -1;
            }
        }

        $isABestContact = isset($mapping[$a['bestContact']]) ? isset($mapping[$a['bestContact']]) : 0;
        $isBBestContact = isset($mapping[$b['bestContact']]) ? isset($mapping[$b['bestContact']]) : 0;

        $a = $isABestContact;
        $b = $isBBestContact;

        if ($a == $b) {

            return 0;
        }

        return ($a > $b) ? -1 : 1;
    }
}
