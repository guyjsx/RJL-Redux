<?php

namespace Repositories\Charge;

use Illuminate\Database\Eloquent\Model;

/**
 * Charge repository, containing commonly used queries
 */
class ChargeRepository implements ChargeInterface
{
    // Our Eloquent Charge model
    protected $chargeModel;

    /**
     * Setting our class $chargeModel to the injected model
     *
     * @param Model $charge
     */
    public function __construct(Model $charge)
    {
        $this->chargeModel = $charge;
    }

    /**
     * Returns the charge object associated with the passed id
     *
     * @param mixed $chargeId
     * @return Model
     */
    public function getChargeById($chargeId)
    {
        return $this->chargeModel->find($chargeId);
    }

    /**
     * Returns all charges
     */
    public function getAllCharges()
    {
        // Search for all
        $charges = $this->chargeModel->all();

        if ($charges)
        {
            return $charges;
        }

        return null;
    }
}