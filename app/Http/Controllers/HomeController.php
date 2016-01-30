<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Compilers\BladeCompiler;
use Entities\RjCase;
use Services\RjCase\RjCaseService;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @param RjCaseService $rjCaseService
     */

    public function __construct(RjCaseService $rjCaseService)
    {
        $this->middleware('auth');
        $this->rjCaseService = $rjCaseService;
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

        return view('layouts/default')->with('user', json_encode($user));
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function show()
    {
        $cases = $this->rjCaseService->getAllCases()->toArray();

        return response()->json(array('html' =>view('home', [
            'cases' => $cases
        ])->render()));
    }
}
