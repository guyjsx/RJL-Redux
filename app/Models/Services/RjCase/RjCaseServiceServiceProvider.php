<?php namespace Services\RjCase;

use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class RjCaseServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'rjCaseService' to the result of the closure
        $this->app->bind('Services\RjCase\RjCaseService', function($app)
        {
            return new RjCaseService(
            // Inject in our class of RjCaseInterface, this will be our repository
                $app->make('Repositories\RjCase\RjCaseInterface')
            );
        });
    }
}