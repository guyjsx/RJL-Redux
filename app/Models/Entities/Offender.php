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
            'dateOfBirth' => array(
                'name' => 'dateOfBirth', 'type' => 'input', 'namePretty' => 'Date of Birth', 'value' => "", 'placeholder' => 'MM/DD/YYYY',
                'date' => "true", 'clearfix' => 'true'
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
                'name' => 'city', 'type' => 'input', 'namePretty' => 'City', 'value' => "", 'clearfix' => 'true'
            ),
            'state' => array(
                'name' => 'state', 'type' => 'select', 'namePretty' => 'State', 'value' => "KY",
                'options' => States::getStates()
            ),
            'school' => array(
                'name' => 'school', 'type' => 'input', 'namePretty' => 'School', 'value' => "",
            ),
            'email' => array(
                'name' => 'email', 'type' => 'input', 'namePretty' => 'Email', 'value' => "", 'clearfix' => 'true'
            ),
            'guardianOneFirstName' => array(
                'name' => 'guardianOneFirstName', 'type' => 'input', 'namePretty' => 'Guardian One First Name', 'value' => "",'clearfix' => "true"
            ),
            'guardianOneLastName' => array(
                'name' => 'guardianOneLastName', 'type' =>'input', 'namePretty' => 'Guardian One Last Name', 'value' => ""
            ),
            'guardianOneRelation' => array(
                'name' => 'guardianOneRelation', 'type' => 'input', 'namePretty' => 'Guardian One Relation', 'value' => ""
            ),
            'phoneOne' => array(
                'name' => 'phoneOne', 'type' => 'input', 'namePretty' => 'Phone One', 'value' => "",'clearfix' => "true"
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
            'phoneThree' => array(
                'name' => 'phoneThree', 'type' => 'input', 'namePretty' => 'Phone Two', 'value' => "",'clearfix' => "true"
            ),
            'phoneThreeType' => array(
                'name' => 'phoneThreeType', 'type' => 'select', 'namePretty' => 'Phone Two Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'guardianTwoFirstName' => array(
                'name' => 'guardianTwoFirstName', 'type' => 'input', 'namePretty' => 'Guardian Two First Name', 'value' => "",'clearfix' => "true"
            ),
            'guardianTwoLastName' => array(
                'name' => 'guardianTwoLastName', 'type' => 'input', 'namePretty' => 'Guardian Two Last Name', 'value' => ""
            ),
            'guardianTwoRelation' => array(
                'name' => 'guardianTwoRelation', 'type' => 'input', 'namePretty' => 'Guardian Two Relation', 'value' => ""
            ),
            'phoneTwo' => array(
                'name' => 'phoneTwo', 'type' => 'input', 'namePretty' => 'Phone One', 'value' => "",'clearfix' => "true"
            ),
            'phoneTwoType' => array(
                'name' => 'phoneTwoType', 'type' => 'select', 'namePretty' => 'Phone One Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'phoneFour' => array(
                'name' => 'phoneFour', 'type' => 'input', 'namePretty' => 'Phone Two', 'value' => "",'clearfix' => "true"
            ),
            'phoneFourType' => array(
                'name' => 'phoneFourType', 'type' => 'select', 'namePretty' => 'Phone Two Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'guardianThreeFirstName' => array(
                'name' => 'guardianThreeFirstName', 'type' => 'input', 'namePretty' => 'Guardian Three First Name', 'value' => "",'clearfix' => "true"
            ),
            'guardianThreeLastName' => array(
                'name' => 'guardianThreeLastName', 'type' => 'input', 'namePretty' => 'Guardian Three Last Name', 'value' => ""
            ),
            'guardianThreeRelation' => array(
                'name' => 'guardianThreeRelation', 'type' => 'input', 'namePretty' => 'Guardian Three Relation', 'value' => ""
            ),
            'phoneFive' => array(
                'name' => 'phoneFive', 'type' => 'input', 'namePretty' => 'Phone One', 'value' => "",'clearfix' => "true"
            ),
            'phoneFiveType' => array(
                'name' => 'phoneFiveType', 'type' => 'select', 'namePretty' => 'Phone One Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'phoneSix' => array(
                'name' => 'phoneSix', 'type' => 'input', 'namePretty' => 'Phone Two', 'value' => "",'clearfix' => "true"
            ),
            'phoneSixType' => array(
                'name' => 'phoneSixType', 'type' => 'select', 'namePretty' => 'Phone Two Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option..', 'value' => ''),
                    array('name' => 'Mobile', 'value' => 'Mobile'),
                    array('name' => 'Work', 'value' => 'Work'),
                    array('name' => 'Home', 'value' => 'Home')
                ]
            ),
            'comments' => array(
                'name' => 'comments', 'type' => 'textarea', 'namePretty' => 'Comments', 'value' => "", 'clearfix' => "true"
            )
        );

        return $fieldDataMapping;
    }
}
