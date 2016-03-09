<?php namespace Services\User;

use Entities\User;
use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class UserServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'userService' to the result of the closure
        $this->app->bind('Services\User\UserService', function($app)
        {
            return new UserService(
            // Inject in our class of RjCaseInterface, this will be our repository
                $app->make('Repositories\User\UserInterface')
            );
        });
    }
}