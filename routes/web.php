<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;



Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'login');
    Route::post('/login', 'loginAction');
    Route::get('/register', 'register');
    Route::post('/register', 'registerAction');
    Route::post('/logout', 'logout');
});

Route::controller(BookController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/book', 'show');
    Route::post('/book', 'create');
    Route::get('/book/upload', 'upload');
    Route::post('/book/delete', 'delete');
    Route::get('/book/{id}', 'update');
    Route::post('/book/{id}', 'updateAction');
});

Route::controller(TransactionController::class)->group(function () {
    Route::get('/koleksi', 'koleksi');
    Route::post('/transaction/pay', 'getSnapToken');
    Route::post('/transaction/succses', 'transactionSuccses');
});

