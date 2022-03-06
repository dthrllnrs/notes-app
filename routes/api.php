<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Notes\NotesController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function() {
    Route::post('login', LoginController::class);
    Route::post('register', RegisterController::class);
});

Route::prefix('notes')->middleware('auth:sanctum')->group(function() {
    Route::post('create', [NotesController::class, 'create']);
    Route::post('update/{note}', [NotesController::class, 'update']);
    Route::post('delete/{note}', [NotesController::class, 'delete']);
    Route::get('', [NotesController::class, 'getUserNotes']);
});
