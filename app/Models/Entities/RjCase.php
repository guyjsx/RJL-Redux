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

    public function files()
    {
        return $this->hasMany('Entities\FileUpload', 'case_id');
    }

    public function notes()
    {
        return $this->hasMany('Entities\Note', 'rj_case_id');
    }

    public static function fieldData() {
        $fieldDataMapping = array(
            'caseId' => array(
                'name' => 'caseId', 'type' => 'input', 'namePretty' => 'Case ID', 'value' => ""
            ),
            'caseStatus'=> array(
                'name' => 'caseStatus', 'type' => 'input', 'namePretty' => 'Case Status', 'value' => ""
            ),
            'casePhase' => array(
                'name' => 'casePhase', 'type' => 'input', 'namePretty' => 'Case Phase', 'value' => ""
            ),
            'caseClose' => array(
                'name' => 'caseClose', 'type' => 'input', 'namePretty' => 'Case Close', 'value' => ""
            ),
            'dateOfReferral' => array(
                'name' => 'dateOfReferral', 'type' => 'input', 'namePretty' => 'Date of Referral', 'value' => ""
            ),
            'dateClosed' => array(
                'name' => 'dateClosed', 'type' => 'input', 'namePretty' => 'Closed Date', 'value' => ""
            ),
            'courtDate' => array(
                'name' => 'courtDate', 'type' => 'input', 'namePretty' => 'Court Date', 'value' => ""
            ),
            'caseDescription' => array(
                'name' => 'caseDescription', 'type' => 'textarea', 'namePretty' => 'Case Description', 'value' => ""
            )
        );

        return $fieldDataMapping;
    }
}
