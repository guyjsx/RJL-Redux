<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class RjCase extends Model
{
     /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'rj_cases';

    public $timestamps = false;

    /**
     * The victims that belong to the case
     */
    public function victims()
    {
        return $this->belongsToMany('Entities\Victim', 'rj_cases_victims', 'rj_case_id','victim_id');
    }

    /**
     * The offenders that belong to the case
     */
    public function offenders()
    {
        return $this->belongsToMany('Entities\Offender', 'offenders_rj_cases');
    }

    /**
     * The charges that belong to the case
     */
    public function charges()
    {
        return $this->belongsToMany('Entities\Charge', 'charges_rj_cases');
    }
}
