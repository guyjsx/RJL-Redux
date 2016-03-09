<?php namespace Repositories\User;

/**
 * A simple interface to set the methods in our User repository
 */
interface UserInterface
{
    public function getUserById($userId);

    public function getAllUsers();
}