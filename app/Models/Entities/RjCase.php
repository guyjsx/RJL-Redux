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

    protected $fillable = ['offender_id, victim_id', 'rj_case_id'];

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

    public function files()
    {
        return $this->hasMany('Entities\FileUpload', 'case_id');
    }

    public function notes()
    {
        return $this->hasMany('Entities\Note', 'rj_case_id');
    }

    public function users() {
        return $this->belongsToMany('App\User', 'rj_cases_users', 'rj_case_id', 'user_id');
    }

    public static function fieldData() {
        $fieldDataMapping = array(
            'caseId' => array(
                'name' => 'caseId', 'type' => 'input', 'namePretty' => 'Case ID', 'value' => "", 'placeholder' => ''
            ),
            'caseStatus'=> array(
                'name' => 'caseStatus', 'type' => 'input', 'namePretty' => 'Case Status', 'value' => "", 'placeholder' => ''
            ),
            'casePhase' => array(
                'name' => 'casePhase', 'type' => 'input', 'namePretty' => 'Case Phase', 'value' => "", 'placeholder' => ''
            ),
            'caseClose' => array(
                'name' => 'caseClose', 'type' => 'input', 'namePretty' => 'Case Close', 'value' => 1, 'placeholder' => ''
            ),
            'dateOfReferral' => array(
                'name' => 'dateOfReferral', 'type' => 'input', 'namePretty' => 'Date of Referral', 'value' => "", 'placeholder' => 'YYYY-MM-DD'
            ),
            'dateClosed' => array(
                'name' => 'dateClosed', 'type' => 'input', 'namePretty' => 'Closed Date', 'value' => null, 'placeholder' => 'YYYY-MM-DD'
            ),
            'courtDate' => array(
                'name' => 'courtDate', 'type' => 'input', 'namePretty' => 'Court Date', 'value' => "", 'placeholder' => 'YYYY-MM-DD'
            ),
            'user_id' => array(
                'name' => 'user_id', 'type' => 'select', 'namePretty' => 'Case Manager', 'value' => "", 'placeholder' => '',
                'options' => array()
            ),
            'caseDescription' => array(
                'name' => 'caseDescription', 'type' => 'textarea', 'namePretty' => 'Case Description', 'value' => "", 'placeholder' => ''
            ),
        );

        return $fieldDataMapping;
    }
}
