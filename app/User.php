<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The cases that belong to the user
     */
    public function rjCases()
    {
        return $this->belongsToMany('Entities\RjCase',  'rj_cases_users', 'user_id','rj_case_id');
    }

    public static function fieldData()
    {
        $fieldDataMapping = array(
            'name' => array(
                'name' => 'name', 'type' => 'input', 'namePretty' => 'Full Name', 'value' => ""
            ),
            'username' => array(
                'name' => 'username', 'type' => 'input', 'namePretty' => 'Username', 'value' => ""
            ),
            'email' => array(
                'name' => 'email', 'type' => 'email', 'namePretty' => 'Email', 'value' => ""
            ),
            'role' => array(
                'name' => 'role', 'type' => 'select', 'namePretty' => 'Role', 'value' => "",
                'options' => [
                    array('name' => 'Select an option...', 'value' => '', 'selected' => 'true'),
                    array('name' => 'Admin', 'value' => 'admin', 'selected' => ''),
                    array('name' => 'Case Manager', 'value' => 'casemanager', 'selected' => ''),
                    array('name' => 'Facilitator', 'value' => 'facilitator', 'selected' => '')
                ]
            )
        );

        return $fieldDataMapping;
    }
}
