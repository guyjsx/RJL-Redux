<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Victim extends Model
{
    /**
     * The cases that belong to the victim
     */
    public function rjCases()
    {
        return $this->belongsToMany('Entities\RjCase', 'rj_cases_victim');
    }

}
