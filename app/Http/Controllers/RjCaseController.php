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

        if (isset($data['case'][0])) {
            $case = new RjCase;
            $case->caseId = $data['case'][0]['caseId']['value'];
            $case->caseStatus = $data['case'][0]['caseStatus']['value'];
            $case->save();
        }

        if(isset($data['victim'])) {
            foreach($data['victim'] as $newVictim) {
                $victim = new Victim();
                $victim->victimId = $newVictim['victimId']['value'];
                $victim->firstName = $newVictim['firstName']['value'];
                $victim->lastName = $newVictim['lastName']['value'];
                $victim->save();

                $case->victims()->attach($victim->id);
            }
        }

        if (isset($data['offender'])) {
            foreach($data['offender'] as $newOffender) {
                $offender = new Offender();

                $offender->offenderId = $newOffender['offenderId']['value'];
                $offender->firstName = $newOffender['firstName']['value'];
                $offender->lastName = $newOffender['lastName']['value'];
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

        $case = RjCase::find($data['id']);

        $case->caseId = $data['caseId'];
        $case->caseStatus = $data['caseStatus'];

        $case->save();

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
