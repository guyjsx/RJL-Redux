<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\View\Compilers\BladeCompiler;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index()
    {
        return view('welcome');
    }
}
