<?php namespace Repositories\Note;

use Entities\Note;
use Repositories\Note\NoteRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class NoteRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the NoteInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\Note\NoteInterface', function ($app) {
            return new NoteRepository(new Note());
        });
    }
}