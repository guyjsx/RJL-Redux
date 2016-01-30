<?php namespace Repositories\Charge;

use Entities\Charge;
use Repositories\Charge\ChargeRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class ChargeRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the ChargeInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\Charge\ChargeInterface', function ($app) {
            return new ChargeRepository(new Charge());
        });
    }
}