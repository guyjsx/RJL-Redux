<?php namespace Repositories\Victim;

/**
 * A simple interface to set the methods in our Victim repository
 */
interface VictimInterface
{
    public function getVictimById($victimId);

    public function getAllVictims();

    public function searchVictims($searchType, $searchStr);
}