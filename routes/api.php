<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login','AuthController@login');

Route::group(['middleware' => 'auth:api','return-json'],function () {
    Route::get('user','AuthController@user');
    Route::post('logout','AuthController@logout');
    Route::get('get-users','Api\UsersController@getUsers');
    Route::post('add-user','Api\UsersController@addUser');
    Route::post('add-usercreds','Api\UsersController@addUserCreds');
    Route::get('user-id','Api\UsersController@getById');
    Route::post('add-contact','ContactController@store');
    Route::get('get-contacts','ContactController@getContacts');
    Route::post('update-user','Api\UsersController@updateUser');
    Route::post('edit-contact','ContactController@updateContact');
    Route::get('get-nations','NationController@getNations');
    Route::post('store-nation','NationController@storeNation');
    Route::put('update-nation','NationController@updateNation');
    Route::get('get-edu','EducationController@getEdu');
    Route::post('add-edu','EducationController@storeEdu');
    Route::put('update-edu','EducationController@updateEdu');
    Route::get('get-parties','PartyController@getParties');
    Route::post('add-party','PartyController@addParty');
    Route::put('update-party','PartyController@updateParty');
    Route::get('get-inst','InstitutionController@getInst');
    Route::post('add-inst','InstitutionController@storeInst');
    Route::put('update-inst','InstitutionController@updateInst');
    Route::get('get-okrug','OkrugController@getOkrug');
    Route::post('add-okrug','OkrugController@addOkrug');
    Route::put('update-okrug','OkrugController@updateOkrug');
    
});


