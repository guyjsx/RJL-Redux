<?php namespace Services\Victim;

use Entities\Victim;
use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class VictimServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'victimService' to the result of the closure
        $this->app->bind('Services\Victim\VictimService', function($app)
        {
            return new VictimService(
            // Inject in our class of RjCaseInterface, this will be our repository
                $app->make('Repositories\Victim\VictimInterface')
            );
        });
    }
}