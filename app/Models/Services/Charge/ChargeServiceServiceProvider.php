<?php namespace Services\Charge;

use Entities\Charge;
use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class ChargeServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'chargeService' to the result of the closure
        $this->app->bind('Services\Charge\ChargeService', function($app)
        {
            return new ChargeService(
            // Inject in our class of RjCaseInterface, this will be our repository
                $app->make('Repositories\Charge\ChargeInterface')
            );
        });
    }
}