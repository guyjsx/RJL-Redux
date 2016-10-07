<?php

namespace Repositories\RjCase;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB as DB;

/**
* RjCase repository, containing commonly used queries
*/
class RjCaseRepository implements RjCaseInterface
{
    // Our Eloquent RjCase model
    protected $rjCaseModel;
    
    /**
    * Setting our class $rjCaseModel to the injected model
    * 
    * @param Model $rjCase
    */
    public function __construct(Model $rjCase)
    {
        $this->rjCaseModel = $rjCase;
    }

    /**
    * Returns the pokemon object associated with the passed id
    * 
    * @param mixed $caseId
    * @return Model
    */
    public function getCaseById($id)
    {
        return $this->rjCaseModel->where('id', '=', $id)->with('victims', 'offenders', 'charges', 'files', 'notes', 'users')->get()->toArray()[0];
    }

    /**
     * Returns the pokemon object associated with the passed id
     *
     * @param mixed $caseId
     * @return Model
     */
    public function getCaseObjectById($id)
    {
        return $this->rjCaseModel->where('id', '=', $id)->get();
    }

    /**
    * Returns all cases
    */
    public function getAllCases()
    {
        // Search for all
        $cases = $this->rjCaseModel->with('victims', 'offenders')->get();

        if ($cases)
        {
            return $cases;
        }
        
        return null;
    }
}