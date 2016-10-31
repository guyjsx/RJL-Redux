<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Services\FileUpload\FileUploadService;

class FileUploadController extends Controller
{
    public function __construct(FileUploadService $fileUploadService)
    {
        $this->fileUploadService = $fileUploadService;
    }

    public function store(Request $request) {

        return $this->fileUploadService->uploadFile($request);
    }

    public function destroy($id) {

        return $this->fileUploadService->deleteFile($id);
    }

}
