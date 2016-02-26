<?php
namespace Services\Note;

Use Repositories\Note\NoteInterface;

class NoteService
{
    // Containing our NoteRepository to make all our database calls to
    protected $noteRepo;

    /**
     * Loads our $noteRepo with the actual Repo associated with our NoteInterface
     *
     * @param noteInterface $noteRepo
     */
    public function __construct(NoteInterface $noteRepo)
    {
        $this->noteRepo = $noteRepo;
    }

    /**
     * Method to get note by id
     *
     * @param string $noteId
     * @return string
     */
    public function getNoteById($noteId)
    {
        $note = $this->noteRepo->getNoteById($noteId);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($note != null)
        {
            return $note;
        }

        // If nothing found, return this simple string
        return 'Note Not Found';
    }

    /**
     * Method to get all notes
     *
     * @return string
     */
    public function getAllNotes()
    {

        $notes = $this->noteRepo->getAllNotes();

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($notes != null)
        {
            return $notes;
        }

        // If nothing found, return this simple string
        return 'Notes Not Found';
    }

    public function saveNote($data) {
        $this->noteRepo->saveNote($data);
        return "success";
    }
}