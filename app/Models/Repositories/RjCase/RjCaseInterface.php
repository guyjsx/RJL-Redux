<?php namespace Repositories\RjCase;

/**
 * A simple interface to set the methods in our Pokemon repository, nothing much happening here
 */
interface RjCaseInterface
{
    public function getCaseById($caseId);

    public function getAllCases();

    public function getAllOpenCases();

    public function getAllClosedCases();
}