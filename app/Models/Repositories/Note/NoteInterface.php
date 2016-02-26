<?php namespace Repositories\Note;

/**
 * A simple interface to set the methods in our Note repository
 */
interface NoteInterface
{
    public function getNoteById($noteId);

    public function getAllNotes();

    public function saveNote($data);
}