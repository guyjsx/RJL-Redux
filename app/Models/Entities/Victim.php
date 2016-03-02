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

    public static function fieldData() {
        $fieldDataMapping = array(
            'victimId' => array(
                'name' => 'victimId', 'type' => 'input', 'namePretty' => 'Victim ID', 'value' => ""
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
            'age' => array(
                'name' => 'age', 'type' => 'input', 'namePretty' => 'Age', 'value' => ""
            ),
            'dateOfBirth' => array(
                'name' => 'dateOfBirth', 'type' => 'input', 'namePretty' => 'Date of Birth', 'value' => "",'placeholder' => 'YYYY-MM-DD'
            ),
            'gender' => array(
                'name' => 'gender', 'type' => 'select', 'namePretty' => 'Gender', 'value' => "",
                'options' => array(
                    array('name' => 'Select an option...', 'value' => '', 'selected'=> 'true'),
                    array('name' => 'Male', 'value' => 'male', 'selected'=> ''),
                    array('name' => 'Female', 'value' => 'female', 'selected'=> '')
                )
            ),
            'race' => array(
                'name' => 'race', 'type' => 'select', 'namePretty' => 'Race', 'value' => "",
                    'options' => array(
                        array('name' => 'Select an option...', 'value' => '', 'selected'=> 'true'),
                        array('name' => 'White', 'value' => 'White', 'selected'=> ''),
                        array('name' => 'African-American', 'value' => 'African-American', 'selected'=> ''),
                        array('name' => 'Hispanic', 'value' => 'Hispanic', 'selected'=> ''),
                        array('name' => 'Asian', 'value' => 'asian', 'selected'=> ''),
                        array('name' => 'Native Hawaiian/Pacific Islander', 'value' => 'Native Hawaiian/Pacific Islander', 'selected'=> ''),
                        array('name' => 'Native American/Alaska Native', 'value' => 'Native American/Alaska Native', 'selected'=> ''),
                        array('name' => 'Other/Mixed', 'value' => 'Other/Mixed', 'selected'=> '')
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
                'name' => 'state', 'type' => 'input', 'namePretty' => 'State', 'value' => ""
            ),
            'email' => array(
                'name' => 'email', 'type' => 'input', 'namePretty' => 'Email', 'value' => ""
            ),
            'phoneOne' => array(
                'name' => 'phoneOne', 'type' => 'input', 'namePretty' => 'Phone One', 'value' => ""
            ),
            'phoneOneType' => array(
                'name' => 'phoneOneType', 'type' => 'select', 'namePretty' => 'Phone One Type', 'value' => "",
                    'options' => array(
                        array('name' => 'Select an option...', 'value' => '', 'selected'=> 'true'),
                        array('name' => 'Mobile', 'value' => 'Mobile', 'selected'=> '' ),
                        array('name' => 'Work', 'value' => 'Work', 'selected'=> ''),
                        array('name' => 'Home', 'value' => 'Home', 'selected'=> '')
                    )
            ),
            'phoneTwo' => array(
                'name' => 'phoneTwo', 'type' => 'input', 'namePretty' => 'Phone Two', 'value' => ""
            ),
            'phoneTwoType' => array(
                'name' => 'phoneTwoType', 'type' => 'select', 'namePretty' => 'Phone Two Type', 'value' => "",
                    'options' => [
                        array('name' => 'Select an option...', 'value' => '', 'selected'=> 'true'),
                        array('name' => 'Mobile', 'value' => 'Mobile', 'selected'=> ''),
                        array('name' => 'Work', 'value' => 'Work', 'selected'=> ''),
                        array('name' => 'Home', 'value' => 'Home', 'selected'=> '')
                    ]
            ),
        );

        return $fieldDataMapping;
    }

}
