<?php namespace Services\FileUpload;

use Entities\FileUpload;
use Illuminate\Support\ServiceProvider;

/**
 * Register the rjcase service with Laravel
 */
class FileUploadServiceServiceProvider extends ServiceProvider
{
    /**
     * Registers the service in the IoC Container
     *
     */
    public function register()
    {
        // Binds 'fileService' to the result of the closure
        $this->app->bind('Services\FileUpload\FileUploadService', function($app)
        {
            return new FileUploadService(
                $app->make('Repositories\FileUpload\FileUploadInterface')
            );
        });
    }
}