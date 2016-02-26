<?php

namespace Repositories\Note;

use Illuminate\Database\Eloquent\Model;

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
     * @param Model $note
     */
    public function __construct(Model $note)
    {
        $this->noteModel = $note;
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
            $note = new $this->noteModel;

            $note->noteDate = $data["noteDate"];
            $note->noteContent = $data["noteContent"];

            $note->save();

            $savedNote = $note->find($note->id);

            return "test";
        }

    }
}