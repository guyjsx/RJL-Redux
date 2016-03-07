<?php

namespace App\Http\Controllers;

use Entities\Offender;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Services\Offender\OffenderService;

class OffenderController extends Controller
{
    public function __construct(OffenderService $offenderService)
    {
        $this->offenderService = $offenderService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $offenders = $this->offenderService->getAllOffenders();

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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
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
        //
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
