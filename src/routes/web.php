<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','TodoController@welcome');
// Route::get('/todo/show', 'ShowController@index');

Route::get('/todo/{any}', function () {
    return view('todo');
})->where('any', '.*');


// Auth

Route::group(["middleware"=>"auth"],function(){
    Route::get('/todo','TodoController@index');
    Route::get('/todo/{any}','TodoController@index');
});

Auth::routes();
