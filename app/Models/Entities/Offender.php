<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Offender extends Model
{
    /**
     * The cases that belong to the offender
     */
    public function offenders()
    {
        return $this->belongsToMany('Entities\RjCase', 'offendeddrs_rj_cases');
    }

}
