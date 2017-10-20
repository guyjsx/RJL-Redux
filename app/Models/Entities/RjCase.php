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

    protected $fillable = ['offender_id, victim_id', 'rj_case_id', 'user_id'];

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

    public static function createCaseFieldData()
    {
        $fieldDataMapping = array(
            'caseId' => array(
                'name' => 'caseId', 'type' => 'input', 'namePretty' => 'Case ID', 'value' => "", 'placeholder' => ''
            ),
            'caseStatus' => array(
                'name' => 'caseStatus', 'type' => 'select', 'namePretty' => 'Case Status', 'value' => "",
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Open - Monitoring', 'value' => 'Open - Monitoring'),
                    array('name' => 'Open - Pending', 'value' => 'Open - Pending'),
                    array('name' => 'Closed', 'value' => 'Closed')
                )
            ),
            'caseType' => array(
                'name' => 'caseType', 'type' => 'select', 'namePretty' => 'Case Type', 'value' => "", 'placeholder' => '',
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Juvenile', 'value' => 'Juvenile'),
                    array('name' => 'Adult', 'value' => 'Adult'),
                )
            ),
            'referralSource' => array(
                'name' => 'referralSource', 'type' => 'select', 'namePretty' => 'Referral Source', 'value' => "", 'placeholder' => '',
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'CDW', 'value' => 'CDW'),
                    array('name' => 'Court', 'value' => 'Court'),
                )
            ),
            'dateOfCharge' => array(
                'name' => 'dateOfCharge', 'type' => 'input', 'namePretty' => 'Date of Charge', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'courtDate' => array(
                'name' => 'courtDate', 'type' => 'input', 'namePretty' => 'Court Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"

            ),
            'dateOfReferral' => array(
                'name' => 'dateOfReferral', 'type' => 'input', 'namePretty' => 'Date of Referral', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'dueDate' => array(
                'name' => 'dueDate', 'type' => 'input', 'namePretty' => 'Due Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'preConferenceDate' => array(
                'name' => 'preConferenceDate', 'type' => 'input', 'namePretty' => 'Pre-Conference Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'finalConferenceDate' => array(
                'name' => 'finalConferenceDate', 'type' => 'input', 'namePretty' => 'Final Conference Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"

            ),
            'user_id' => array(
                'name' => 'user_id', 'type' => 'select', 'namePretty' => 'Case Manager', 'value' => "73", 'placeholder' => '',
                'options' => array()
            ),
            'caseDescription' => array(
                'name' => 'caseDescription', 'type' => 'textarea', 'namePretty' => 'Case Description', 'value' => "", 'placeholder' => ''
            ),
        );

        return $fieldDataMapping;
    }


    public static function editCaseFieldData() {
        $fieldDataMapping = array(
            'caseId' => array(
                'name' => 'caseId', 'type' => 'input', 'namePretty' => 'Case ID', 'value' => "", 'placeholder' => ''
            ),
            'caseStatus' => array(
                'name' => 'caseStatus', 'type' => 'select', 'namePretty' => 'Case Status', 'value' => "",
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Open - Monitoring', 'value' => 'Open - Monitoring'),
                    array('name' => 'Open - Pending', 'value' => 'Open - Pending'),
                    array('name' => 'Closed', 'value' => 'Closed')
                )
            ),
            'caseClose' => array(
                'name' => 'caseClose', 'type' => 'select', 'namePretty' => 'Case Close', 'value' => '1', 'placeholder' => '',
                'options' => array(
                    array('name' => 'Case has not been closed', 'value' => '1'),
                    array('name' => 'Case closed successfully', 'value' => '2'),
                    array('name' => 'Offender did not complete agreement.', 'value' => '15'),
                    array('name' => 'Offender did not participate', 'value' => '17'),
                    array('name' => 'Victim did not participate', 'value' => '18'),
                    array('name' => 'Victim could not be located/did not respond to contact', 'value' => '19'),
                    array('name' => 'Offender could not be located/did not respond to contact', 'value' => '20'),
                    array('name' => 'Victim did not wish to participate or prosecute the case', 'value' => '21')
                )
            ),
            'caseType' => array(
                'name' => 'caseType', 'type' => 'select', 'namePretty' => 'Case Type', 'value' => "", 'placeholder' => '',
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Juvenile', 'value' => 'Juvenile'),
                    array('name' => 'Adult', 'value' => 'Adult'),
                )
            ),
            'referralSource' => array(
                'name' => 'referralSource', 'type' => 'select', 'namePretty' => 'Referral Source', 'value' => "", 'placeholder' => '',
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'CDW', 'value' => 'CDW'),
                    array('name' => 'Court', 'value' => 'Court'),
                )
            ),
            'dateOfCharge' => array(
                'name' => 'dateOfCharge', 'type' => 'input', 'namePretty' => 'Date of Charge', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'courtDate' => array(
                'name' => 'courtDate', 'type' => 'input', 'namePretty' => 'Court Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"

            ),
            'dateOfReferral' => array(
                'name' => 'dateOfReferral', 'type' => 'input', 'namePretty' => 'Date of Referral', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'dueDate' => array(
                'name' => 'dueDate', 'type' => 'input', 'namePretty' => 'Due Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'preConferenceDate' => array(
                'name' => 'preConferenceDate', 'type' => 'input', 'namePretty' => 'Pre-Conference Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'finalConferenceDate' => array(
                'name' => 'finalConferenceDate', 'type' => 'input', 'namePretty' => 'Final Conference Date', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'dateClosed' => array(
                'name' => 'dateClosed', 'type' => 'input', 'namePretty' => 'Closed Date', 'value' => null, 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'user_id' => array(
                'name' => 'user_id', 'type' => 'select', 'namePretty' => 'Case Manager', 'value' => 73, 'placeholder' => '',
                'options' => array()
            ),
            'caseDescription' => array(
                'name' => 'caseDescription', 'type' => 'textarea', 'namePretty' => 'Case Description', 'value' => "", 'placeholder' => ''
            ),
        );

        return $fieldDataMapping;
    }
}
