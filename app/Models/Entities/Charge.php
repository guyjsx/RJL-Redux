<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Charge extends Model
{

    public $timestamps = false;
    /**
     * The cases that belong to the offender
     */
    public function charges()
    {
        return $this->belongsToMany('Entities\RjCase', 'charges_rj_cases');
    }

}
