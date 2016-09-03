<?php

namespace Repositories\Offender;

use Entities\Offender;
use Illuminate\Database\Eloquent\Model;

/**
 * Offender repository, containing commonly used queries
 */
class OffenderRepository implements OffenderInterface
{
    // Our Eloquent Offender model
    protected $offenderModel;

    /**
     * Setting our class $offenderModel to the injected model
     *
     * @param Model $offender
     */
    public function __construct(Model $offender)
    {
        $this->offenderModel = $offender;
    }

    /**
     * Returns the offender object associated with the passed id
     *
     * @param mixed $offenderId
     * @return Model
     */
    public function getOffenderById($offenderId)
    {
        return $this->offenderModel->with('rjCases')->find($offenderId);
    }

    /**
     * Returns all offenders
     */
    public function getAllOffenders()
    {
        // Search for all
        $offenders = $this->offenderModel->with('rjCases')->get();

        if ($offenders)
        {
            return $offenders;
        }

        return null;
    }

    public function searchOffenders($searchType, $searchStr) {
        $offenders = Offender::where($searchType, 'LIKE', $searchStr)->get();

        if ($offenders)
        {
            return $offenders;
        }

        return null;
    }
}