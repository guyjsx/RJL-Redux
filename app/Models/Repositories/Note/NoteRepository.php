<?php

namespace Repositories\Note;

use Entities\Note;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Services\Utility\UtilityService;

/**
 * Note repository, containing commonly used queries
 */
class NoteRepository implements NoteInterface
{
    // Our Eloquent Note model
    protected $noteModel;

    /**
     * Setting our class $noteModel to the injected model
     *
     * @param Model          $note
     * @param UtilityService $utilityService
     */
    public function __construct(Model $note, UtilityService $utilityService)
    {
        $this->noteModel = $note;
        $this->utilityService = $utilityService;
    }

    /**
     * Returns the note object associated with the passed id
     *
     * @param mixed $noteId
     * @return Model
     */
    public function getNoteById($noteId)
    {
        return $this->noteModel->find($noteId);
    }

    /**
     * Returns all notes
     */
    public function getAllNotes()
    {
        // Search for all
        $notes = $this->noteModel->all();

        if ($notes)
        {
            return $notes;
        }

        return null;
    }

    public function saveNote($data)
    {
        if (isset($data)) {
            $data['noteDate']= $this->utilityService->parseToMysqlDate($data['noteDate']);

            $userName = Auth::user()->username;

            $note = new Note(
                array(
                    "noteDate" => $data["noteDate"],
                    "noteContactType" => $data["noteContactType"],
                    "noteContent" => $data["noteContent"],
                    "rj_case_id" => $data["id"],
                    "userName" => $userName
                )
            );

            $note->save();

            $savedNote = $note->find($note->id);

            $responseData = array(
                'note' => $savedNote
            );

            return response()->json($responseData);
        }

    }
}