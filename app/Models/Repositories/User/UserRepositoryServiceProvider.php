<?php namespace Repositories\User;

use App\User;
use Repositories\User\UserRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class UserRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the UserInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\User\UserInterface', function ($app) {
            return new UserRepository(new User());
        });
    }
}