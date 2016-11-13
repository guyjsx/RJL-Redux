<?php

namespace Entities;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{

    protected $table = 'notes';

    public $timestamps = false;

    protected $fillable = ['noteContent', 'noteDate', 'noteContactType', 'userName', 'rj_case_id'];

    public static function fieldData() {
        $fieldDataMapping = array(
            'noteContactType' => array(
                'name' => 'noteContactType', 'type' => 'select', 'namePretty' => 'Note Contact Type', 'value' => "",
                'options' => [
                    array('name' => 'Select an option...', 'value' => '', 'selected'=> 'true'),
                    array('name' => 'Phone', 'value' => 'Phone', 'selected'=> ''),
                    array('name' => 'Letter', 'value' => 'Letter', 'selected'=> ''),
                    array('name' => 'Email/Text', 'value' => 'Email/Text', 'selected'=> ''),
                    array('name' => 'Pre-conference', 'value' => 'Pre-conference', 'selected'=> ''),
                    array('name' => 'Final Conference', 'value' => 'Final Conference', 'selected'=> ''),
                    array('name' => 'Progress Note', 'value' => 'Progress Note', 'selected'=> '')
                ]
            )
        );

        return $fieldDataMapping;
    }

}
