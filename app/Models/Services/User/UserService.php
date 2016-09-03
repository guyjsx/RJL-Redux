<?php
namespace Services\User;

Use Repositories\User\UserInterface;

class UserService
{
    // Containing our UserRepository to make all our database calls to
    protected $userRepo;

    /**
     * Loads our $userRepo with the actual Repo associated with our UserInterface
     *
     * @param userInterface $userRepo
     */
    public function __construct(UserInterface $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * Method to get user by id
     *
     * @param string $userId
     * @return string
     */
    public function getUserById($userId)
    {
        $user = $this->userRepo->getUserById($userId);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($user != null)
        {
            return $user;
        }

        // If nothing found, return this simple string
        return 'User Not Found';
    }

    /**
     * Method to get all users
     *
     * @return string
     */
    public function getAllUsers()
    {

        $users = $this->userRepo->getAllUsers();

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($users != null)
        {
            return $users;
        }

        // If nothing found, return this simple string
        return 'Users Not Found';
    }

    /**
     * Method to get all users by role
     *
     * @param string $role
     *
     * @return string
     */
    public function getAllUsersByRole($role)
    {
        $users = $this->userRepo->getAllUsersByRole($role);

        // If Eloquent Object returned (rather than null) return the name of the pokemon
        if ($users != null)
        {
            return $users;
        }

        // If nothing found, return this simple string
        return 'Users with this role not Found';
    }
}