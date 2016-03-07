<?php namespace Repositories\Offender;

/**
 * A simple interface to set the methods in our Offender repository
 */
interface OffenderInterface
{
    public function getOffenderById($offenderId);

    public function getAllOffenders();

    public function searchOffenders($searchType, $searchStr);
}