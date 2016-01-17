<?php
namespace Services\RjCase;

Use Repositories\RjCase\RjCaseInterface;

class RjCaseService
{
    // Containing our RjCaseRepository to make all our database calls to
    protected $rjCaseRepo;

    /**
     * Loads our $rjCaseRepo with the actual Repo associated with our RjCaseInterface
     *
     * @param rjCaseInterface $rjCaseRepo
     * @return RjCaseService
     */
    public function __construct(RjCaseInterface $rjCaseRepo)
    {
        $this->rjCaseRepo = $rjCaseRepo;
    }

    /**
     * Method to get all cases
     *
     * @return string
     */
    public function getAllCases()
    {

        $cases = $this->rjCaseRepo->getAllCases();
        // If pokemon variable is numeric, assume ID


        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($cases != null)
        {
            return $cases;
        }

        // If nothing found, return this simple string
        return 'Cases Not Found';
    }
}