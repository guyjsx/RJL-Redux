<?php

namespace App\Http\Controllers;

use Entities\RjCase;
use Entities\Victim;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Schema;
use Services\RjCase\RjCaseService;
use Services\Utility\UtilityService;
use Services\Victim\VictimService;

class VictimController extends Controller
{

    public function __construct(VictimService $victimService, RjCaseService $rjCaseService, UtilityService $utilityService)
    {
        $this->victimService = $victimService;
        $this->rjCaseService = $rjCaseService;
        $this->utilityService = $utilityService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $victims = $this->victimService->getAllVictims()->toArray();

        return response()->json(array('html' =>view('victims/index', [
            'victims' => $victims
        ])->render()));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $cases = $this->rjCaseService->getAllCases()->toArray();
        $victimFieldData = Victim::fieldData();

        return response()->json(array(
            'cases' => $cases,
            'victimFieldData' => $victimFieldData,
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
        $victimData = isset($data['victim'][0]) ? $data['victim'][0] : null;
        $victimFields = Schema::connection('mysql')->getColumnListing('victims');

        if (isset($victimData)) {
            $victim = new Victim();

            foreach($victimData as $field) {
                if (in_array($field['name'], $victimFields)) {
                    if ($this->utilityService->isDateField($field['name'])) {
                        $field['value'] = $this->utilityService->parseToMysqlDate($field['value']);
                    }
                    $victim[$field['name']] = $field['value'];
                }
            }

            $victim->save();

            if (isset($data['cases'])) {
                foreach($data['cases'] as $newCase) {
                    $victim->rjCases()->attach($newCase);
                }
            }
        }

        return response()->json(array('success' => 'true'));
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
        $victim = $this->victimService->getVictimById($id);
        $cases = $this->rjCaseService->getAllCases()->toArray();
        $victimFieldData = Victim::fieldData();

        return response()->json(array(
            'data' => $victim,
            'token' => $token,
            'victimFieldData' => $victimFieldData,
            'casesData' => $cases
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        $victimFields = Schema::connection('mysql')->getColumnListing('victims');

        if (isset($data)) {
            $victim = Victim::find($data['id']);

            foreach($data as $key => $value) {
                if (in_array($key, $victimFields)) {
                    if ($this->utilityService->isDateField($key)) {
                        $value = $this->utilityService->parseToMysqlDate($value);
                    }

                    $victim[$key] = $value;
                }
            }

            $victim->save();

            if (isset($data['cases'])) {
                $existingCases = $this->victimService->getVictimById($data['id'])->rjCases;

                foreach($data['cases'] as $newCase) {
                    if (!in_array($newCase, $existingCases->toArray())) {
                        $victim->rjCases()->detach();
                    }
                }

                foreach($data['cases'] as $newCase) {
                    $victim->rjCases()->attach($newCase);
                }
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

        if (Victim::where('victimId', '=', $data['victimId'])->exists()) {
            return "false";
        }

        return "true";
    }

    public function searchVictims(Request $request) {
        $data = $request->all();
        $searchType = $data["searchType"];
        $searchStr = $data["searchStr"];

        $victims = $this->victimService->searchVictims($searchType, $searchStr);

        return response()->json(array('victims' => $victims));

    }
}
