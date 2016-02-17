<?php namespace Repositories\FileUpload;

use Entities\FileUpload;
use Repositories\FileUpload\FileUploadRepository;
use Illuminate\Support\ServiceProvider;

/**
 * Register our Repository with Laravel
 */
class FileUploadRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Registers the FileUploadInterface with Laravels IoC Container
     *
     */
    public function register()
    {
        // Bind the returned class to the namespace 'Repositories\RjCase\RjCaseInterface
        $this->app->bind('Repositories\FileUpload\FileUploadInterface', function ($app) {
            return new FileUploadRepository(new FileUpload());
        });
    }
}