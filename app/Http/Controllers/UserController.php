<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Services\User\UserService;


class UserController extends Controller
{
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = $this->userService->getAllUsers();

        return response()->json(array('data' => $users));
    }

    public function getUser() {
        $user = null;
        if (Auth::check()) {
            $user = Auth::user();
        }

        $userName = isset($user->username) ? $user->username : null;
        $role = isset($user->role) ? $user->role : null;

        $userArr = array(
            'username' => $userName,
            'role' => $role
        );

        return response()->json($userArr);
    }

    public function getFacilitatorAssignments() {

        return $this->userService->getFacilitatorAssignments();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $userFieldData = User::fieldData();

        return response()->json(array(
            'userFieldData' => $userFieldData,
        ));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $token = csrf_token();
        $user = $this->userService->getUserById($id);
        $userFieldData = User::fieldData();

        return response()->json(array(
            'data' => $user,
            'token' => $token,
            'userFieldData' => $userFieldData,
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        $userFields = Schema::connection('mysql')->getColumnListing('users');

        if (isset($data)) {
            $user = User::find($data['id']);

            foreach($data as $key => $value) {
                if (in_array($key, $userFields)) {
                    $user[$key] = $value;
                }
            }

            $user->save();
        }

        return response()->json(array('success' => 'true'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
