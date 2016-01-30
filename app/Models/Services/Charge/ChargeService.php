<?php
namespace Services\Charge;

Use Repositories\Charge\ChargeInterface;

class ChargeService
{
    // Containing our ChargeRepository to make all our database calls to
    protected $chargeRepo;

    /**
     * Loads our $chargeRepo with the actual Repo associated with our ChargeInterface
     *
     * @param chargeInterface $chargeRepo
     */
    public function __construct(ChargeInterface $chargeRepo)
    {
        $this->chargeRepo = $chargeRepo;
    }

    /**
     * Method to get charge by id
     *
     * @param string $chargeId
     * @return string
     */
    public function getChargeById($chargeId)
    {
        $charge = $this->chargeRepo->getChargeById($chargeId);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($charge != null)
        {
            return $charge;
        }

        // If nothing found, return this simple string
        return 'Charge Not Found';
    }

    /**
     * Method to get all charges
     *
     * @return string
     */
    public function getAllCharges()
    {

        $charges = $this->chargeRepo->getAllCharges();

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($charges != null)
        {
            return $charges;
        }

        // If nothing found, return this simple string
        return 'Charges Not Found';
    }
}