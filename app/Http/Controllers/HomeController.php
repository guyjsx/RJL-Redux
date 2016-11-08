<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Compilers\BladeCompiler;
use Entities\RjCase;
use Services\RjCase\RjCaseService;
use Services\User\UserService;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @param RjCaseService $rjCaseService
     */

    public function __construct(RjCaseService $rjCaseService, UserService $userService)
    {
        $this->middleware('auth');
        $this->rjCaseService = $rjCaseService;
        $this->userService = $userService;
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index()
    {
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

        return view('layouts/default')->with('user', json_encode($userArr));
    }

    /**
     * Show the application dashboard
     *
     * @return Response
     */
    public function show()
    {
        if (Auth::check()) {
            $user = Auth::user();
        }

        $isAdmin = isset($user) && $user->role == "admin" || $user->role == 'caseadmin';

        $cases = isset($isAdmin) ?
            $this->userService->getAllUserCasesByUserId($user->id) :
            $this->rjCaseService->getAllCases()->toArray();

        return response()->json(array('html' =>view('cases/index', [
            'cases' => $cases
        ])->render()));
    }
}
