<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;
use Entities\States;

class Victim extends Model
{
    protected $table = 'victims';

    protected $fillable = ['rj_case_id', 'victim_id'];

    public $timestamps = false;
    /**
     * The cases that belong to the victim
     */
    public function rjCases()
    {
        return $this->belongsToMany('Entities\RjCase',  'rj_cases_victims', 'victim_id', 'rj_case_id');
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
            'dateOfBirth' => array(
                'date'=> 'true', 'name' => 'dateOfBirth', 'type' => 'input', 'namePretty' => 'Date of Birth', 'value' => "",'placeholder' => 'MM/DD/YYYY'
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
                'name' => 'race', 'type' => 'select', 'namePretty' => 'Race', 'value' => "",'clearfix' => 'true',
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
                'name' => 'streetAddress', 'type' => 'input', 'namePretty' => 'Street Address', 'value' => "",
            ),
            'zipCode' => array(
                'name' => 'zipCode', 'type' => 'input', 'namePretty' => 'Zip Code', 'value' => ""
            ),
            'city' => array(
                'name' => 'city', 'type' => 'input', 'namePretty' => 'City', 'value' => "",'clearfix' => 'true'
            ),
            'state' => array(
                'name' => 'state', 'type' => 'select', 'namePretty' => 'State', 'value' => "",
                'options' => States::getStates()
            ),
            'email' => array(
                'name' => 'email', 'type' => 'input', 'namePretty' => 'Email', 'value' => ""
            ),
            'phoneOne' => array(
                'name' => 'phoneOne', 'type' => 'input', 'namePretty' => 'Phone One', 'value' => "", 'clearfix' => 'true'
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
                'name' => 'phoneTwo', 'type' => 'input', 'namePretty' => 'Phone Two', 'value' => "",'clearfix' => "true"
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
            'phoneThree' => array(
                'name' => 'phoneThree', 'type' => 'input', 'namePretty' => 'Phone Three', 'value' => "", 'clearfix' => "true"
            ),
            'phoneThreeType' => array(
                'name' => 'phoneThreeType', 'type' => 'select', 'namePretty' => 'Phone Three Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'participating' => array(
                'name' => 'participating', 'type' => 'select', 'namePretty' => 'Participating', 'value' => "", 'clearfix' => "true",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Yes', 'value' => 'Yes'),
                    array('name' => 'No', 'value' => 'No'),
                ]
            ),
            'bestContact' => array(
                'name' => 'bestContact', 'type' => 'select', 'namePretty' => 'Best to Contact', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Yes', 'value' => 'Yes'),
                    array('name' => 'No', 'value' => 'No'),
                ]
            ),
            'comments' => array(
                'name' => 'comments', 'type' => 'textarea', 'namePretty' => 'Comments', 'value' => ""
            ),
        );

        return $fieldDataMapping;
    }

}
