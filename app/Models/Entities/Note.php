<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{

    protected $table = 'notes';

    public $timestamps = false;

    protected $fillable = ['noteContent', 'noteDate', 'rj_case_id'];

}
