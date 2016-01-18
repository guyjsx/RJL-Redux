<?php namespace Repositories\Offender;

use Entities\Offender;
use Repositories\Offender\OffenderRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class OffenderRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the OffenderInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\Offender\OffenderInterface', function ($app) {
            return new OffenderRepository(new Offender());
        });
    }
}