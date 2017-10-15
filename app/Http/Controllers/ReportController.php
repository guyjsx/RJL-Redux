<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\Report\ReportService;
use Excel;

use App\Http\Requests;
use Services\RjCase\RjCaseService;

class ReportController extends Controller
{
    public function __construct(ReportService $reportService, RjCaseService $rjCaseService)
    {
        $this->reportService = $reportService;
    }

    public function index()
    {
        $token = csrf_token();

        return array(
            'token' => $token
        );
    }

    /**
     * get open juvenile cases
     */
    public function processReport()
    {
        $data = $_POST;
        $cases = $this->reportService->getAllCasesWithFiltersByType($data);

        $cases = $this->formatRelatedModels($cases);

        $casesArr = array();
        // Convert each member of the returned collection into an array,
        // and append it to the payments array.
        foreach ($cases as $case) {
            $casesArr[] = $case;
        }

        // Generate and return the spreadsheet
        Excel::create('cases', function($excel) use ($casesArr) {

            // Set the spreadsheet title, creator, and description
            $excel->setTitle('Open Juvenile Cases');
            $excel->setCreator('RJL');

            // Build the spreadsheet, passing in the payments array
            $excel->sheet('open-juvenile-cases', function($sheet) use ($casesArr) {
                $sheet->fromArray($casesArr, null, 'A1', false);
            });

        })->download('csv');

        return;
    }

    public function formatRelatedModels($cases)
    {
        $index = 0;
        foreach ($cases as $data) {

            if (isset($data['id'])) {
                unset($cases[$index]['id']);
            }

            $cases[$index]['Victims'] = '';

            if (isset($data['victims'])) {
                foreach ($data['victims'] as $fields) {
                    foreach ($fields as $fieldName => $fieldValue) {
                        $cases[$index]['Victims'] =  isset($cases[$index]['Victims']) ? $cases[$index]['Victims'] . ' ' . $fieldValue : $fieldValue;
                    }

                    $cases[$index]['Victims'] = $cases[$index]['Victims'] . ' | ';
                }
                unset($cases[$index]['victims']);
            }

            $cases[$index]['Offenders'] = '';

            if (isset($data['offenders'])) {
                foreach ($data['offenders'] as $fields) {
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "id") {
                            $cases[$index]['Offenders'] = isset($cases[$index]['Offenders']) ? $cases[$index]['Offenders'] . ' ' . $fieldValue : $fieldValue;
                        }
                    }

                    $cases[$index]['Offenders'] = $cases[$index]['Offenders'] . ' | ';
                }
                unset($cases[$index]['offenders']);
            }

            $cases[$index]['Charges'] = '';

            if (isset($data['charges'])) {
                foreach ($data['charges'] as $fields) {
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "id") {
                            $cases[$index]['Charges'] = isset($cases[$index]['Charges']) ? $cases[$index]['Charges'] . ' ' . $fieldValue : $fieldValue;
                        }
                    }

                    $cases[$index]['Charges'] = $cases[$index]['Charges'] . ' | ';
                }
                unset($cases[$index]['charges']);
            }

            $cases[$index]['Note Date'] = '';
            $cases[$index]['Note Content'] = '';
            $cases[$index]['Note Contact Type'] = '';

            if (isset($data['notes'])) {
                $lastNoteFields = isset($data['notes'][0]) ? $data['notes'][0] : null;

                if (isset($lastNoteFields) && is_array($lastNoteFields)) {
                    foreach ($lastNoteFields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "rj_case_id") {
                            $cases[$index][$fieldName] = $fieldValue;
                        }
                    }
                }

                unset($cases[$index]['notes']);
            }

            $cases[$index]['Facilitators'] = '';

            if (isset($data['users'])) {
                foreach ($data['users'] as $fields) {
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "id") {
                            $cases[$index]['Facilitators'] = isset($cases[$index]['Facilitators']) ? $cases[$index]['Facilitators'] . ' ' . $fieldValue : $fieldValue;
                        }
                    }

                    $cases[$index]['Facilitators'] = $cases[$index]['Facilitators'] . ' | ';
                }
                unset($cases[$index]['users']);

            }

            $index++;
        }

        return $cases;
    }

    protected function parseDateRange($data) {
        if (isset($data['dateStart']) && isset($data['dateEnd'])) {

            return array(
                'dateStart' => $this->utiltyService->parseToMysqlDate($data['dateStart']),
                'dateEnd' => $this->utiltyService->parseToMysqlDate($data['dateEnd'])
            );
        }

        return null;
    }
}