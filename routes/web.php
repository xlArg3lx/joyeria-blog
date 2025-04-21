<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// API para el formulario de contacto
Route::post('/api/contact', [ContactController::class, 'send']);

// Rutas de la SPA (Single Page Application)
// Todas las rutas se manejan con la misma vista que carga React
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!api).*$');
