<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $timestamps = false;
    /**
     * The users that belong to the case
     */
    public function users()
    {
        return $this->belongsToMany('Entities\RjCase', 'rj_cases_users');
    }
}