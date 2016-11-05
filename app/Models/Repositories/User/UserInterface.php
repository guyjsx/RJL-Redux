<?php namespace Repositories\User;

/**
 * A simple interface to set the methods in our User repository
 */
interface UserInterface
{
    public function getUserById($userId);

    public function getAllUsers();

    public function getAllUsersByRole($role);

    public function getAllUserCasesByUserId($userId);

    public function getFacilitatorAssignments();
}