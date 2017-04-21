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

            if (isset($data['victims'])) {
                foreach ($data['victims'] as $fields) {
                    $childIndex = 0;
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "id") {
                            $newFieldName = 'Victim ' . ($childIndex + 1) . ' ' . ucfirst($fieldName);
                            $cases[$index][$newFieldName] = $fieldValue;
                        }
                    }
                }
                unset($cases[$index]['victims']);
            }

            if (isset($data['offenders'])) {
                foreach ($data['offenders'] as $fields) {
                    $childIndex = 0;
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "id") {
                            $newFieldName = 'Offender ' . ($childIndex + 1) . ' ' . ucfirst($fieldName);
                            $cases[$index][$newFieldName] = $fieldValue;
                        }
                    }
                }
                unset($cases[$index]['offenders']);
            }

            if (isset($data['charges'])) {
                foreach ($data['charges'] as $fields) {
                    $childIndex = 0;
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "id") {
                            $newFieldName = substr(ucfirst($fieldName), 0, -1) . ' ' . ($childIndex + 1);
                            $cases[$index][$newFieldName] = $fieldValue;
                        }
                    }
                }
                unset($cases[$index]['charges']);
            }

            if (isset($data['notes'])) {
                $lastNoteFields = end($data['notes']);

                if (isset($lastNoteFields) && is_array($lastNoteFields)) {
                    foreach ($lastNoteFields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "rj_case_id") {
                            $cases[$index][$fieldName] = $fieldValue;
                        }
                    }
                }

                unset($cases[$index]['notes']);
            }

            if (isset($data['users'])) {
                foreach ($data['users'] as $fields) {
                    foreach ($fields as $fieldName => $fieldValue) {
                        if ($fieldName !== "pivot" && $fieldName !== "rj_case_id") {
                            $cases[$index][$fieldName] = $fieldValue;
                        }
                    }
                    break;
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