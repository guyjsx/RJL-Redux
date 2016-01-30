<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Victim extends Model
{
    protected $table = 'victims';

    public $timestamps = false;
    /**
     * The cases that belong to the victim
     */
    public function rjCases()
    {
        return $this->belongsToMany('Entities\RjCase',  'rj_cases_victims', 'rj_case_id','victim_id');
    }

}
