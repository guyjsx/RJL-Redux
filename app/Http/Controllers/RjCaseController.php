<?php

namespace App\Http\Controllers;

use Entities\Offender;
use Entities\Victim;
use Illuminate\Http\Request;

use App\Http\Requests;
use Entities\RjCase;
use App\Http\Controllers\Controller;
use Services\Offender\OffenderService;
use Services\RjCase\RjCaseService;

class RjCaseController extends Controller
{

    public function __construct(RjCaseService $rjCaseService)
    {
        $this->rjCaseService = $rjCaseService;
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
        return response()->json(array('html' =>view('cases/create')->render()));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all()['data'];
        $case = new RjCase;
        $case->caseId = $data['case']['caseId'];
        $case->save();

        foreach($data['victim'] as $newVictim) {
            $victim = new Victim();

            $victim->victimId = $newVictim['victimId'];
            $victim->firstName = $newVictim['firstName'];
            $victim->lastName = $newVictim['lastName'];
            $victim->save();

            $case->victims()->attach($victim->id);
        }

        return redirect('/#/cases/' . $case->id . '/edit');
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

        return response()->json(array('data' => $case, 'token' => $token));
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
}
