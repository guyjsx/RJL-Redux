<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Offender extends Model
{

    public $timestamps = false;

    protected $fillable = ['rj_case_id'];

    /**
     * The cases that belong to the offender
     */
    public function rjCases()
    {
        return $this->belongsToMany('Entities\RjCase',  'offenders_rj_cases', 'rj_case_id','offender_id');
    }

    public static function fieldData() {
        $fieldDataMapping = array(
            'offenderId' => array(
                'name' => 'offenderId', 'type' => 'input', 'namePretty' => 'Offender ID', 'value' => ""
            ),
            'firstName'=> array(
                'name' => 'firstName', 'type' => 'input', 'namePretty' => 'First Name', 'value' => ""
            ),
            'lastName' => array(
                'name' => 'lastName', 'type' => 'input', 'namePretty' => 'Last Name', 'value' => ""
            ),
            'socialSecurityNumber' => array(
                'name' => 'socialSecurityNumber', 'type' => 'input', 'namePretty' => 'SSN', 'value' => ""
            ),
            'dateOfBirth' => array(
                'name' => 'dateOfBirth', 'type' => 'input', 'namePretty' => 'Date of Birth', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true"
            ),
            'gender' => array(
                'name' => 'gender', 'type' => 'select', 'namePretty' => 'Gender', 'value' => "",
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Male', 'value' => 'male'),
                    array('name' => 'Female', 'value' => 'female')
                )
            ),
            'race' => array(
                'name' => 'race', 'type' => 'select', 'namePretty' => 'Race', 'value' => "",
                'options' => array(
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'White', 'value' => 'White'),
                    array('name' => 'African-American', 'value' => 'African-American'),
                    array('name' => 'Hispanic', 'value' => 'Hispanic'),
                    array('name' => 'Asian', 'value' => 'asian'),
                    array('name' => 'Native Hawaiian/Pacific Islander', 'value' => 'Native Hawaiian/Pacific Islander'),
                    array('name' => 'Native American/Alaska Native', 'value' => 'Native American/Alaska Native'),
                    array('name' => 'Other/Mixed', 'value' => 'Other/Mixed')
                )
            ),
            'streetAddress' => array(
                'name' => 'streetAddress', 'type' => 'input', 'namePretty' => 'Street Address', 'value' => ""
            ),
            'zipCode' => array(
                'name' => 'zipCode', 'type' => 'input', 'namePretty' => 'Zip Code', 'value' => ""
            ),
            'city' => array(
                'name' => 'city', 'type' => 'input', 'namePretty' => 'City', 'value' => ""
            ),
            'state' => array(
                'name' => 'state', 'type' => 'select', 'namePretty' => 'State', 'value' => "KY",
                'options' => States::getStates()
            ),
            'email' => array(
                'name' => 'email', 'type' => 'input', 'namePretty' => 'Email', 'value' => ""
            ),
            'guardianOneFirstName' => array(
                'name' => 'guardianOneFirstName', 'type' => 'input', 'namePretty' => 'Guardian One First Name', 'value' => ""
            ),
            'guardianOneLastName' => array(
                'name' => 'guardianOneLastName', 'type' =>'input', 'namePretty' => 'Guardian One Last Name', 'value' => ""
            ),
            'guardianOneRelation' => array(
                'name' => 'guardianOneRelation', 'type' => 'input', 'namePretty' => 'Guardian One Relation', 'value' => ""
            ),
            'guardianTwoFirstName' => array(
                'name' => 'guardianTwoFirstName', 'type' => 'input', 'namePretty' => 'Guardian Two First Name', 'value' => ""
            ),
            'guardianTwoLastName' => array(
                'name' => 'guardianTwoLastName', 'type' => 'input', 'namePretty' => 'Guardian Two Last Name', 'value' => ""
            ),
            'guardianTwoRelation' => array(
                'name' => 'guardianTwoRelation', 'type' => 'input', 'namePretty' => 'Guardian Two Relation', 'value' => ""
            ),
            'phoneOne' => array(
                'name' => 'phoneOne', 'type' => 'input', 'namePretty' => 'Phone One', 'value' => ""
            ),
            'phoneOneType' => array(
                'name' => 'phoneOneType', 'type' => 'select', 'namePretty' => 'Phone One Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'phoneTwo' => array(
                'name' => 'phoneTwo', 'type' => 'input', 'namePretty' => 'Phone Two', 'value' => ""
            ),
            'phoneTwoType' => array(
                'name' => 'phoneTwoType', 'type' => 'select', 'namePretty' => 'Phone Two Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
        );

        return $fieldDataMapping;
    }
}
