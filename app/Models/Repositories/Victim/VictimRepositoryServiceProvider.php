<?php namespace Repositories\Victim;

use Entities\Victim;
use Repositories\Victim\VictimRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class VictimRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the VictimInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\Victim\VictimInterface', function ($app) {
            return new VictimRepository(new Victim());
        });
    }
}