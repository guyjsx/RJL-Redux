<?php

namespace Repositories\FileUpload;

use Entities\FileUpload;
use Illuminate\Database\Eloquent\Model;

/**
 * FileUpload repository, containing commonly used queries
 */
class FileUploadRepository implements FileUploadInterface
{
    // Our Eloquent FileUpload model
    protected $fileUploadModel;

    /**
     * Setting our class $fileUploadModel to the injected model
     *
     * @param Model $fileUpload
     */
    public function __construct(Model $fileUpload)
    {
        $this->fileUploadModel = $fileUpload;
    }

    /**
     * Returns the fileUpload object associated with the passed id
     *
     * @param mixed $fileUploadId
     * @return Model
     */
    public function getFileUploadById($fileUploadId)
    {
        return $this->fileUploadModel->find($fileUploadId);
    }

    /**
     * Returns all fileUploads
     */
    public function getAllFileUploads()
    {
        // Search for all
        $fileUploads = $this->fileUploadModel->all();

        if ($fileUploads)
        {
            return $fileUploads;
        }

        return null;
    }

    public function uploadFile($request) {
        $data = $request->all();
        $id  = $data['id'];
        $uploadedFile = $request->file('file');
        $destinationPath = 'uploads';
        $fileName = $uploadedFile->getClientOriginalName();

        $file = new FileUpload(array(
            "filename" => $fileName,
            "case_id" => $id
        ));

        $file->save();

        $uploadedFile->move($destinationPath, $fileName);

        $responseData = array(
            'file' => $file
        );

        return response()->json($responseData);
    }

    public function deleteFile($id) {

        $file = $this->fileUploadModel->find($id);

        $file->delete();

        return response()->json(
            array('status' => 'success')
        );
    }
}