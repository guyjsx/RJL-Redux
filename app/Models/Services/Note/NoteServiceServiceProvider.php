<?php namespace Services\Note;

use Entities\Note;
use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class NoteServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'noteService' to the result of the closure
        $this->app->bind('Services\Note\NoteService', function($app)
        {
            return new NoteService(
            // Inject in our class of RjCaseInterface, this will be our repository
                $app->make('Repositories\Note\NoteInterface')
            );
        });
    }
}