<?php

namespace Repositories\RjCase;

use Illuminate\Database\Eloquent\Model;
use \stdClass;

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
    * @param mixed $pokemonId
    * @return Model
    */
    public function getCaseById($caseId)
    {
        return $this->rjCaseModel->find($caseId);
    }

    /**
    * Returns the pokemon object associated with the pokemonName
    * 
    * @param string $pokemonName
    */
    public function getAllCases()
    {
        // Search for all
        $cases = $this->rjCaseModel->all();

        if ($cases)
        {
            return $cases;
        }
        
        return null;
    }
}