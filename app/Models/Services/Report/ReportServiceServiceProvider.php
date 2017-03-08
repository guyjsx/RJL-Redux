<?php namespace Services\Report;

use Illuminate\Support\ServiceProvider;

/**
 * Register the report service with laravel
 */
class ReportServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'ReportService' to the result of the closure
        $this->app->bind('Services\Report\ReportService', function($app)
        {
            return new ReportService(
                $app->make('Repositories\Report\ReportInterface'), $app->make('Services\Utility\UtilityService')
            );
        });
    }
}