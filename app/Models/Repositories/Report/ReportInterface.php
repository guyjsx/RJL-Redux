<?php namespace Repositories\Report;

/**
 * A simple interface to set the methods in our Pokemon repository, nothing much happening here
 */
interface ReportInterface
{
    public function getAllCasesWithFilters($fields, $statusFilter, $typeFilter, $relatedObjects, $userName, $additionalFilters = array());
    public function getReportMapping($type, $data, $parsedDateRange = array());
}