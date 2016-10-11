<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => 'web'], function () {
    // Authentication Routes...
    Route::get('login', 'Auth\AuthController@showLoginForm');
    Route::post('login', 'Auth\AuthController@login');
    Route::get('logout', 'Auth\AuthController@logout');

    // Registration Routes...
    Route::post('/register', 'Auth\AuthController@register');

    // Password Reset Routes...
    Route::get('password/reset/{token?}', 'Auth\PasswordController@showResetForm');
    Route::post('password/email', 'Auth\PasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\PasswordController@reset');

    Route::get('/', 'HomeController@index');
    Route::get('/api/users', 'UserController@index');
    Route::get('/api/home', 'HomeController@show');
    Route::get('/api/cases/exists', 'RjCaseController@checkIfExists');
    Route::get('/api/victim/exists', 'VictimController@checkIfExists');
    Route::get('/api/victim/search', 'VictimController@searchVictims');
    Route::get('/api/offender/search', 'OffenderController@searchOffenders');
    Route::get('/api/offender/exists', 'OffenderController@checkIfExists');
    Route::resource('/api/cases', 'RjCaseController');
    Route::resource('/api/offender', 'OffenderController');
    Route::resource('/api/victim', 'VictimController');
    Route::resource('/api/user', 'UserController');
    Route::resource('/api/charge', 'ChargeController');
    Route::post('/api/file-upload', 'FileUploadController@uploadFile');
    Route::resource('/api/note', 'NoteController');
});

