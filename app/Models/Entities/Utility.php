<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Utility extends Model
{
    public static function getDateFieldKeys() {

        return array(
            'dateOfBirth', 'dateOfReferral', 'dateClosed', 'courtDate', 'noteDate', 'dateOfCharge', 'preConferenceDate', 'conferenceDate', 'agreementEndDate', 'dueDate', 'finalConferenceDate'
        );
    }

}