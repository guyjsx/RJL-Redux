<?php namespace Repositories\Charge;

/**
 * A simple interface to set the methods in our Charge repository
 */
interface ChargeInterface
{
    public function getChargeById($chargeId);

    public function getAllCharges();
}