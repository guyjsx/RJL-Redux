<?php
namespace Services\Utility;

use Entities\Utility;

class UtilityService
{
    /**
     * Method to parse to MySQL Date
     *
     * @return string
     */
    public function parseToMysqlDate($date)
    {

        return date("Y-m-d", strtotime($date));
    }

    public function isDateField($fieldName) {
        if (in_array($fieldName, Utility::getDateFieldKeys())) {

            return true;
        }

        return false;
    }
}