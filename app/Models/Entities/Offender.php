<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Offender extends Model
{

    public $timestamps = false;
    /**
     * The cases that belong to the offender
     */
    public function offenders()
    {
        return $this->belongsToMany('Entities\RjCase', 'offenders_rj_cases');
    }

}
