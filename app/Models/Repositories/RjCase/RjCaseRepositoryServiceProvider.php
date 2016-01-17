<?php namespace Repositories\RjCase;

use Entities\RjCase;
use Repositories\RjCase\RjCaseRepository;
use Illuminate\Support\ServiceProvider;

/**
* Register our Repository with Laravel
*/
class RjCaseRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the RjCaseInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\RjCase\RjCaseInterface', function ($app) {
            return new RjCaseRepository(new RjCase());
        });
    }
}