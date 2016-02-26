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
    Route::auth();

    Route::get('/', 'HomeController@index');
    Route::get('/api/home', 'HomeController@show');
    Route::resource('/api/cases', 'RjCaseController');
    Route::resource('/api/offender', 'OffenderController');
    Route::resource('/api/victim', 'VictimController');
    Route::resource('/api/charge', 'ChargeController');
    Route::post('/api/file-upload', 'FileUploadController@uploadFile');
    Route::resource('/api/note', 'NoteController');

});

