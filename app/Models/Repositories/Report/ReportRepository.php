<?php

namespace Repositories\Report;

use Entities\Report;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB as DB;

/**
* Report repository, containing commonly used queries
*/
class ReportRepository implements ReportInterface
{
    protected $reportModel;
    protected $rjCaseModel;

    /**
     * Setting our class $rjCaseModel to the injected model
     *
     * @param $report
     * @param Model $rjCase
     */
    public function __construct($report, Model $rjCase)
    {
        $this->reportModel = $report;
        $this->rjCaseModel = $rjCase;
    }

    /**
     * Returns all cases with filter
     *
     * @param array  $fields
     * @param string $statusFilter
     * @param string $typeFilter
     * @param array  $relatedObjects
     * @param string $userName
     * @param array  $additionalFilters
     *
     * @return null
     */
    public function getAllCasesWithFilters($fields, $statusFilter, $typeFilter, $relatedObjects, $userName, $additionalFilters = array())
    {
        $formattedHeaderFields = $this->formatFieldsToHeaderNames($fields);
        $cases = $this->rjCaseModel->addSelect(DB::raw($formattedHeaderFields));

        if (isset($relatedObjects['offenders'])) {
            $cases->with(['offenders' => function($query) use ($relatedObjects) {
                $formattedHeaderFields= isset($relatedObjects['offenders']['fields']) ? $relatedObjects['offenders']['fields'] : array();
                $query->addSelect(DB::raw($this->formatFieldsToHeaderNames($formattedHeaderFields)));
            }]);
        }

        if (isset($relatedObjects['victims'])) {
            $cases->with(['victims' => function($query) use ($relatedObjects) {
                $formattedHeaderFields = isset($relatedObjects['victims']['fields']) ? $relatedObjects['victims']['fields'] : array();
                $query->addSelect(DB::raw($this->formatFieldsToHeaderNames($formattedHeaderFields)));
            }]);
        }

        if (isset($relatedObjects['charges'])) {
            $cases->with(['charges' => function($query) use ($relatedObjects) {
                $formattedHeaderFields = isset($relatedObjects['charges']['fields']) ? $relatedObjects['charges']['fields'] : array();
                $query->addSelect(DB::raw($this->formatFieldsToHeaderNames($formattedHeaderFields)));
            }]);
        }

        if (isset($relatedObjects['notes'])) {
            $cases->with(['notes' => function($query) use ($relatedObjects) {
                $formattedHeaderFields = isset($relatedObjects['notes']['fields']) ? $relatedObjects['notes']['fields'] : array();
                $query->addSelect(DB::raw($this->formatFieldsToHeaderNames($formattedHeaderFields)));
            }]);
        }

        // add case status filter
        if ($statusFilter == "all") {
            $cases->where(function($query) {
                $query->where('caseStatus', '=', 'Open - Pending');
                $query->orWhere('caseStatus', '=', 'Open - Monitoring');
                $query->orWhere('caseStatus', '=', 'Closed');
            });
        } else if ($statusFilter == "open-pending-monitoring") {
            $cases->where(function($query) {
                $query->where('caseStatus', '=', 'Open - Pending');
                $query->orWhere('caseStatus', '=', 'Open - Monitoring');
            });
        } else if ($statusFilter == "open-pending") {
            $cases->where('caseStatus', '=', 'Open - Pending');
        } else if ($statusFilter == "open-monitoring") {
            $cases->where('caseStatus', '=', 'Open - Monitoring');
        } else if ($statusFilter == "closed") {
            $cases->where('caseStatus', '=', 'Closed');
        }

        //add case type filter
        if ($typeFilter == "all") {
            $cases->where(function($query) {
                $query->where('caseType', '=', 'Juvenile');
                $query->orwhere('caseType', '=', 'Adult');
            });
        } else if ($typeFilter == "juvenile") {
            $cases->where('caseType', '=', 'Juvenile');
        } else if ($typeFilter == "adult") {
            $cases->where('caseType', '=', 'Adult');
        }

        if (!empty($additionalFilters)) {
            foreach ($additionalFilters as $additionalFilter) {
                if ($additionalFilter['filterType'] == "date" && !(in_array(null, $additionalFilter['filterValues'], true))) {
                    $cases->whereBetween($additionalFilter['filterName'], $additionalFilter['filterValues']);
                } else if (isset($additionalFilter['filterName']) &&  isset($additionalFilter['filterOperation']) && isset($additionalFilter['filterValue'])) {
                    $cases->where(function($query) use ($additionalFilter) {
                        $query->where($additionalFilter['filterName'], $additionalFilter['filterOperation'], $additionalFilter['filterValue']);
                    });
                }
            }
        }

        //add user filter
        if (isset($userName) && !empty($userName)) {
            $cases->with(['users' => function($query) {
                $query->addSelect(DB::raw("rj_case_id, username as 'Username'"));
            }]);

            $casesArr = $cases->whereHas('users', function($query) use ($userName) {
                $query->where('username', $userName);
            })->get()->toArray();
        } else {
            $casesArr = $cases->get()->toArray();
        }

        if (isset($casesArr))
        {

            return $this->transformCaseCloseReasons($casesArr);
        }

        return null;
    }

    private function formatFieldsToHeaderNames($fields) {
        $fieldStr = "";
        $fieldArrLength = count($fields);

        foreach ($fields as $index => $field) {

            if ($field == 'id' || $field == 'rj_case_id') {
                $selectField = $field . ",";
            } else {
                $formattedField = ucwords($this->splitCamelCaseString($field));
                $selectField = ($index == ($fieldArrLength - 1)) ? $formattedStr = $field . " as " . "'" . $formattedField . "'" : $formattedStr = $field . " as " . "'" . $formattedField . "'" . ",";
            }

            $fieldStr .= $selectField;
        }

        return $fieldStr;
    }

    private function splitCamelCaseString($str) {
        $nameArr = preg_split('/(?=[A-Z])/', $str);
        $nameArrLength = count($nameArr);
        $fieldName = "";

        //&& $index == ($nameArrLength - 1)

        foreach ($nameArr as $index => $name) {
            ($index !== 0) ? $fieldName .= " " . $name :  $fieldName .= $name;
        }

        return $fieldName;
    }

    public function getReportMapping($type, $data, $parsedDateRange = array()) {
        switch ($type) {
            case "adult-report":
                $mapping = Report::getAdultCaseStatusReportMapping($data, $parsedDateRange);
                break;
            case "juvenile-report":
                $mapping = Report::getJuvenileCaseStatusReportMapping($data, $parsedDateRange);
                break;
            case "cdw-report":
                $mapping = Report::getCdwReportMapping($data, $parsedDateRange);
                break;
            case "board-report":
                $mapping = Report::getBoardReportMapping($data, $parsedDateRange);
                break;
            case "annual-report":
                $mapping = Report::getAnnualReportMapping($data, $parsedDateRange);
                break;
            case "user-case-history-report":
                $mapping = Report::getUserCaseHistoryReportMapping($data, $parsedDateRange);
                break;
            case "user-active-cases-report":
                $mapping = Report::getUserActiveCasesReportMapping($data, $parsedDateRange);
                break;
            case "victim-summary-report":
                $mapping = Report::getVictimSummaryReportMapping($data, $parsedDateRange);
                break;
            case "default-report":
                $mapping = Report::getDefaultReportMapping($data, $parsedDateRange);
                break;
            default:
                $mapping = Report::getDefaultReportMapping($data, $parsedDateRange);
        }

        return $mapping;
    }

    public function transformCaseCloseReasons($cases) {
        $closeReasonMapping = Report::getCaseCloseReasonMapping();
        foreach ($cases as $index => $case) {
            if (isset($case['Case Close'])) {
                $closeReasonNumber = $case['Case Close'];
                foreach ($closeReasonMapping as $reason) {
                    if ($reason['value'] == $closeReasonNumber) {
                        $cases[$index]['Case Close'] = $reason['name'];
                    }
                }
            }
        }

        return $cases;
    }
}