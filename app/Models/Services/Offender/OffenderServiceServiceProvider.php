<?php namespace Services\Offender;

use Entities\Offender;
use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class OffenderServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'offenderService' to the result of the closure
        $this->app->bind('Services\Offender\OffenderService', function($app)
        {
            return new OffenderService(
            // Inject in our class of RjCaseInterface, this will be our repository
                $app->make('Repositories\Offender\OffenderInterface')
            );
        });
    }
}