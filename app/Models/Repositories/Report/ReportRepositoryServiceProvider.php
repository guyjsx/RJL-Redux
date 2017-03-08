<?php namespace Repositories\Report;

use Entities\Report;
use Entities\RjCase;
use Repositories\Report\ReportRepository;
use Illuminate\Support\ServiceProvider;

/**
* Register our Repository with Laravel
*/
class ReportRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the ReportInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\Report\ReportInterface
        $this->app->bind('Repositories\Report\ReportInterface', function ($app) {
            return new ReportRepository(new Report(), new RjCase());
        });
    }
}