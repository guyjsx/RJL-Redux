<?php namespace Repositories\FileUpload;

/**
 * A simple interface to set the methods in our FileUpload repository
 */
interface FileUploadInterface
{
    public function getFileUploadById($fileId);

    public function getAllFileUploads();

    public function uploadFile($request);
}