<?php

namespace Entities;

class Report
{
    public static function getAdultCaseStatusReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseStatus', 'caseType','caseId', 'referralSource', 'courtDate', 'dateOfReferral', 'finalConferenceDate', 'preConferenceDate'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName')
            ), 'notes' => array(
                'fields' => array('rj_case_id', 'noteDate', 'noteContactType', 'noteContent')
            )),
            'userName' => $data['userName']
        );
    }

    public static function getJuvenileCaseStatusReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseStatus', 'caseType','caseId', 'referralSource', 'courtDate', 'dateOfReferral', 'finalConferenceDate', 'preConferenceDate'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName')
            ), 'notes' => array(
                'fields' => array('rj_case_id', 'noteDate', 'noteContactType', 'noteContent')
            )),
            'userName' => $data['userName']
        );
    }


    public static function getCdwReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseId', 'caseStatus', 'referralSource', 'courtDate', 'dueDate'),
            'additionalFilters' => array(
                array('filterType' => 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
                array('filterType' => 'text', 'filterName' => 'referralSource', 'filterOperation' => '=', 'filterValue' => 'CDW')
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName')
            ), 'notes' => array(
                'fields' => array('rj_case_id', 'noteDate', 'noteContactType', 'noteContent')
            )),
            'userName' => $data['userName']
        );
    }


    public static function getBoardReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseId', 'caseType', 'caseStatus', 'dateOfReferral', 'caseClose'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array(),
            'userName' => $data['userName']
        );
    }

    public static function getAnnualReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseType', 'caseId', 'caseStatus', 'referralSource', 'dateOfReferral', 'dateClosed', 'caseClose'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName', 'gender', 'race', 'zipCode')
            ), 'charges' => array(
                'fields' =>  array('id', 'charges')
            )),
            'userName' => $data['userName']
        );
    }

    public static function getUserCaseHistoryReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseId', 'caseType'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName')
            )),
            'userName' => $data['userName']
        );
    }

    public static function getUserActiveCasesReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseId', 'caseStatus', 'caseType'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName')
            )),
            'userName' => $data['userName']
        );
    }

    public static function getVictimSummaryReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'dateOfReferral'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('victims' => array(
                'fields' => array('id', 'victimId', 'firstName', 'lastName', 'zipCode')
            )),
            'userName' => $data['userName']
        );
    }

    public static function getDefaultReportMapping($data, $parsedDateRange = array()) {

        return array(
            'fields' => array('id', 'caseId', 'caseStatus', 'dateOfReferral', 'courtDate', 'dateOfCharge', 'caseDescription', 'dateClosed', 'referralSource', 'caseType', 'finalConferenceDate', 'dueDate'),
            'additionalFilters' => array(
                array('filterType'=> 'date', 'filterName' => 'dateOfReferral', 'filterValues' => array($parsedDateRange['dateStart'], $parsedDateRange['dateEnd'])),
            ),
            'relatedObjects' => array('offenders' => array(
                'fields' => array('id', 'offenderId', 'firstName', 'lastName')
            ), 'notes' => array(
                'fields' => array('rj_case_id', 'noteDate', 'noteContactType', 'noteContent')
            ),'victims' => array(
                'fields' => array('id', 'victimId', 'firstName', 'lastName', 'zipCode')
            ), 'charges' => array(
                'fields' =>  array('id', 'charges')
            )),
            'userName' => $data['userName']
        );
    }

    public static function getCaseCloseReasonMapping() {

        return array(
            array('name' => 'Case has not been closed', 'value' => '1'),
            array('name' => 'Case closed successfully', 'value' => '2'),
            array('name' => 'Offender did not participate', 'value' => '3'),
            array('name' => 'No victim identified and representatives of the community could not be identified', 'value' => '4'),
            array('name' => 'Identified victim did not respond to contact from RJL.', 'value' => '5'),
            array('name' => 'Identified victim did not wish to participate in the conference process.', 'value' => '6'),
            array('name' => 'Identified victim did not wish to participate in the conference process/prosecution of case ', 'value' => '7'),
            array('name' => 'Identified offender did not wish to participate', 'value' => '8'),
            array('name' => 'Identified offender did not respond to contact from RJL', 'value' => '9'),
            array('name' => 'Identified victim did not attend conference meeting after several scheduled meetings', 'value' => '10'),
            array('name' => 'Identified offender did not attend preconference meeting after several scheduled meetings', 'value' => '11'),
            array('name' => 'No victim available with which to work', 'value' => '13'),
            array('name' => 'Case closed unsuccessfully', 'value' => '14'),
            array('name' => 'Offender did not complete agreement.', 'value' => '15'),
            array('name' => 'Offender not available to participate', 'value' => '16')
        );
    }
}
