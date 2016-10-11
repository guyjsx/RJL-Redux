<?php namespace Services\Utility;

use Illuminate\Support\ServiceProvider;

/**
 * Register the utility service with Laravel
 */
class UtilityServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'utilityService' to the result of the closure
        $this->app->bind('Services\Utility\UtilityService', function($app)
        {
            return new UtilityService();
        });
    }
}