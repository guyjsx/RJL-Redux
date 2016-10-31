<?php
namespace Services\FileUpload;

use Repositories\FileUpload\FileUploadInterface;
use Illuminate\Http\Request;

class FileUploadService
{

    protected $fileRepo;

    /**
     * Loads our $fileRepo with the actual Repo associated with our FileUploadInterface
     *
     * @param offenderInterface $offenderRepo
     */
    public function __construct(FileUploadInterface $fileRepo)
    {
        $this->fileRepo = $fileRepo;
    }
    /**
     * Method to get file by id
     *
     * @param string $fileId
     * @return string
     */
    public function getFileUploadById($fileId)
    {
        $file = $this->fileRepo->getFileUploadById($fileId);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($file != null)
        {
            return $file;
        }

        // If nothing found, return this simple string
        return 'FileUpload Not Found';
    }

    /**
     * Method to get all files
     *
     * @return string
     */
    public function getAllFileUploads()
    {

        $files = $this->fileRepo->getAllFileUploads();

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($files != null)
        {
            return $files;
        }

        // If nothing found, return this simple string
        return 'FileUploads Not Found';
    }

    /**
     * Method to upload file
     *
     * @param Request $request
     * @return string
     */
    public function uploadFile(Request $request)
    {
        return $this->fileRepo->uploadFile($request);
    }

    public function deleteFile($id) {

        return $this->fileRepo->deleteFile($id);
    }
}