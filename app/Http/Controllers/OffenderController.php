<?php

namespace App\Http\Controllers;

use Entities\Offender;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Schema;
use Services\Offender\OffenderService;
use Services\RjCase\RjCaseService;

class OffenderController extends Controller
{
    public function __construct(OffenderService $offenderService, RjCaseService $rjCaseService)
    {
        $this->offenderService = $offenderService;
        $this->rjCaseService = $rjCaseService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $offenders = $this->offenderService->getAllOffenders()->toArray();

        return response()->json(array('html' =>view('offenders/index', [
            'offenders' => $offenders
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
        $offenderFieldData = Offender::fieldData();

        return response()->json(array(
            'cases' => $cases,
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
        $offenderData = isset($data['offender'][0]) ? $data['offender'][0] : null;
        $offenderFields = Schema::connection('mysql')->getColumnListing('offenders');

        if (isset($offenderData)) {
            $offender = new Offender();

            foreach($offenderData as $field) {
                if (in_array($field['name'], $offenderFields)) {
                    $offender[$field['name']] = $field['value'];
                }
            }

            $offender->save();

            if (isset($data['cases'])) {
                foreach($data['cases'] as $newCase) {
                    $offender->rjCases()->attach($newCase);
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
        $offender = $this->offenderService->getOffenderById($id);
        $cases = $this->rjCaseService->getAllCases()->toArray();
        $offenderFieldData = Offender::fieldData();

        return response()->json(array(
            'data' => $offender,
            'token' => $token,
            'offenderFieldData' => $offenderFieldData,
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

        $offenderFields = Schema::connection('mysql')->getColumnListing('offenders');

        if (isset($data)) {
            $offender = Offender::find($data['id']);

            foreach($data as $key => $value) {
                if (in_array($key, $offenderFields)) {
                    $offender[$key] = $value;
                }
            }

            $offender->save();

            if (isset($data['cases'])) {
                $offender->rjCases()->detach();
                foreach($data['cases'] as $newCase) {
                    $offender->rjCases()->attach($newCase);
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

        if (Offender::where('offenderId', '=', $data['offenderId'])->exists()) {
            return "false";
        }

        return "true";
    }

    public function searchOffenders(Request $request) {
        $data = $request->all();
        $searchType = $data["searchType"];
        $searchStr = $data["searchStr"];

        $offenders = $this->offenderService->searchOffenders($searchType, $searchStr);

        return response()->json(array('offenders' => $offenders));
    }
}
