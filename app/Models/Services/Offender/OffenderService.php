<?php
namespace Services\Offender;

Use Repositories\Offender\OffenderInterface;

class OffenderService
{
    // Containing our OffenderRepository to make all our database calls to
    protected $offenderRepo;

    /**
     * Loads our $offenderRepo with the actual Repo associated with our OffenderInterface
     *
     * @param offenderInterface $offenderRepo
     */
    public function __construct(OffenderInterface $offenderRepo)
    {
        $this->offenderRepo = $offenderRepo;
    }

    /**
     * Method to get offender by id
     *
     * @param string $offenderId
     * @return string
     */
    public function getOffenderById($offenderId)
    {
        $offender = $this->offenderRepo->getOffenderById($offenderId);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($offender != null)
        {
            return $offender;
        }

        // If nothing found, return this simple string
        return 'Offender Not Found';
    }

    /**
     * Method to get all offenders
     *
     * @return string
     */
    public function getAllOffenders()
    {

        $offenders = $this->offenderRepo->getAllOffenders();

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($offenders != null)
        {
            return $offenders;
        }

        // If nothing found, return this simple string
        return 'Offenders Not Found';
    }

    public function searchOffenders($searchType, $searchStr) {
        if (!empty($searchType) && !empty($searchStr)) {

            return $this->offenderRepo->searchOffenders($searchType, $searchStr);
        }

        return "";
    }
}