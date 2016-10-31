<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Schema;
use Entities\Note;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Services\Note\NoteService;
use Services\Utility\UtilityService;

class NoteController extends Controller
{
    public function __construct(NoteService $noteService, UtilityService $utilityService)
    {
        $this->noteService = $noteService;
        $this->utilityService = $utilityService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

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

        $savedNote = $this->noteService->saveNote($data);

        return $savedNote;
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
        $data = $request->all();

        $noteFields = Schema::connection('mysql')->getColumnListing('notes');

        if (isset($data)) {
            $note = Note::find($id);

            if (in_array($data['name'], $noteFields)) {
                if ($this->utilityService->isDateField($data['name'])) {
                    $data['value'] = $this->utilityService->parseToMysqlDate($data['value']);
                }

                $note[$data['name']] = $data['value'];
            }

            $note->save();
        }

        return response()->json(array('note' => $note->toArray()));
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
