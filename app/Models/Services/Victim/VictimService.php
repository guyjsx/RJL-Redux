<?php
namespace Services\Victim;

Use Repositories\Victim\VictimInterface;

class VictimService
{
    // Containing our VictimRepository to make all our database calls to
    protected $victimRepo;

    /**
     * Loads our $victimRepo with the actual Repo associated with our VictimInterface
     *
     * @param victimInterface $victimRepo
     */
    public function __construct(VictimInterface $victimRepo)
    {
        $this->victimRepo = $victimRepo;
    }

    /**
     * Method to get victim by id
     *
     * @param string $victimId
     * @return string
     */
    public function getVictimById($victimId)
    {
        $victim = $this->victimRepo->getVictimById($victimId);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($victim != null)
        {
            return $victim;
        }

        // If nothing found, return this simple string
        return 'Victim Not Found';
    }

    /**
     * Method to get all victims
     *
     * @return string
     */
    public function getAllVictims()
    {

        $victims = $this->victimRepo->getAllVictims();

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($victims != null)
        {
            return $victims;
        }

        // If nothing found, return this simple string
        return 'Victims Not Found';
    }
}