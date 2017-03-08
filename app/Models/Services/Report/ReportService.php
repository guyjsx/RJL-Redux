<?php
namespace Services\Report;

use Repositories\Report\ReportInterface;
use Services\Utility\UtilityService;

class ReportService
{
    /**
     * Loads our $report with the actual Repo associated with our ReportInterface
     *
     * @param ReportInterface $reportRepo
     *
     */
    public function __construct(ReportInterface $reportRepo, UtilityService $utilityService)
    {
        $this->reportRepo = $reportRepo;
        $this->utilityService = $utilityService;
    }

    /**
     * get all cases with filter
     *
     * @param $statusFilter
     * @param $typeFilter
     * @param $reportType
     *
     * @return array
     */
    public function getAllCasesWithFiltersByType($data) {
        $reportType = isset($data['report-type']) ? $data['report-type'] : null;
        $caseTypeFilter = isset($data['case-type']) ? $data['case-type'] : null;
        $statusFilter = isset($data['case-status']) ? $data['case-status'] : null;
        $parsedDateRange = (isset($data['dateStart']) && isset($data['dateEnd'])) ?
            $this->parseDateRange($data) : array();

        $mapping = $this->reportRepo->getReportMapping($reportType, $data, $parsedDateRange);
        $fields = isset($mapping['fields']) ? $mapping['fields'] : null;
        $additionalFilters = isset($mapping['additionalFilters']) ? $mapping['additionalFilters'] : array();
        $relatedObjects = isset($mapping['relatedObjects']) ? $mapping['relatedObjects'] : array();
        $userName = isset($mapping['userName']) ? $mapping['userName'] : null;

        return $this->reportRepo->getAllCasesWithFilters($fields, $statusFilter, $caseTypeFilter, $relatedObjects, $userName, $additionalFilters);
    }

    protected function parseDateRange($data) {
        if (isset($data['dateStart']) && !empty($data['dateStart']) && isset($data['dateEnd']) && !empty($data['dateEnd'])) {

            return array(
                'dateStart' => $this->utilityService->parseToMysqlDate($data['dateStart']),
                'dateEnd' => $this->utilityService->parseToMysqlDate($data['dateEnd'])
            );
        }

        return null;
    }
}