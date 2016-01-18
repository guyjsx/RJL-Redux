<?php

namespace Repositories\Victim;

use Illuminate\Database\Eloquent\Model;

/**
 * Victim repository, containing commonly used queries
 */
class VictimRepository implements VictimInterface
{
    // Our Eloquent Victim model
    protected $victimModel;

    /**
     * Setting our class $victimModel to the injected model
     *
     * @param Model $victim
     */
    public function __construct(Model $victim)
    {
        $this->victimModel = $victim;
    }

    /**
     * Returns the victim object associated with the passed id
     *
     * @param mixed $victimId
     * @return Model
     */
    public function getVictimById($victimId)
    {
        return $this->victimModel->find($victimId);
    }

    /**
     * Returns all victims
     */
    public function getAllVictims()
    {
        // Search for all
        $victims = $this->victimModel->all();

        if ($victims)
        {
            return $victims;
        }

        return null;
    }
}