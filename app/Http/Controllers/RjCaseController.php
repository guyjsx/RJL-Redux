<?php

namespace App\Http\Controllers;

use Entities\Charge;
use Entities\Offender;
use Entities\Victim;
use Entities\FileUpload;
use Illuminate\Http\Request;

use App\Http\Requests;
use Entities\RjCase;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Schema;
use Services\Charge\ChargeService;
use Services\Offender\OffenderService;
use Services\RjCase\RjCaseService;
use Services\FileUpload\FileUploadService;

class RjCaseController extends Controller
{

    public function __construct(RjCaseService $rjCaseService, ChargeService $chargeService, FileUploadService $fileUploadService)
    {
        $this->rjCaseService = $rjCaseService;
        $this->chargeService = $chargeService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	$cases = $this->rjCaseService->getAllCases()->toArray();

        return response()->json(array('html' =>view('cases/index', [
            'cases' => $cases   
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
        $caseFieldData = RjCase::fieldData();
        $victimFieldData = Victim::fieldData();
        $offenderFieldData = Offender::fieldData();

        return response()->json(array(
            'charges' => $charges,
            'caseFieldData' => $caseFieldData,
            'victimFieldData' => $victimFieldData,
            'offenderFieldData' => $offenderFieldData,
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

        return "success";
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
        $caseFieldData = RjCase::fieldData();
        $victimFieldData = Victim::fieldData();
        $offenderFieldData = Offender::fieldData();
        $charges = $this->chargeService->getAllCharges()->toArray();

        return response()->json(array(
            'data' => $case,
            'token' => $token,
            'caseFieldData' => $caseFieldData,
            'victimFieldData' => $victimFieldData,
            'offenderFieldData' => $offenderFieldData,
            'chargesData' => $charges
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
                        $offender[$key] = $value;
                    }
                }

                $offender->save();
            }
        }

        if (isset($data['charges'])) {
            foreach($data['charges'] as $newCharge) {
                $case->charges()->attach($newCharge);
            }
        }


        return response()->json(array('success' => 'true'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function checkIfExists(Request $request) {
        $data = $request->all();

        if (RjCase::where('caseId', '=', $data['caseId'])->exists()) {
            return "false";
        }

        return "true";
    }
}
