<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class FileUpload extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'contacts';

    public $timestamps = false;

    protected $fillable = ['filename', 'case_id'];

}