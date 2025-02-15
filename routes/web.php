<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LearnerController;
use App\Http\Controllers\CenterController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
//use Redirect;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/powerbi', function(){
    $externalUrl = "https://nam.safelink.emails.azure.net/redirect/?destination=https%3A%2F%2Fapp.powerbi.com%2FRedirect%3Faction%3DOpenLink%26linkId%3Dmzd0MACrqU%26ctid%3De126f099-e35a-4d33-ba65-adb7eb6641f0%26pbi_source%3DlinkShare&p=bT0wYTRjM2MzNy04M2M3LTRiNzQtODgyMy00MjcxMzgxZmY2ZWImdT1hZW8mbD1SZWRpcmVjdA%3D%3D";
    //return Redirect::away($externalUrl);

    $response = Http::get($externalUrl);

    return $response->body();
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/construction', function () {
    return Inertia::render('Construction');
})->middleware(['auth', 'verified'])->name('construction');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    /*Route::get('/admin/dashboard', function(){
        return Inertia::render('Admin/Dashboard');
    });
    /*Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');*/
});

Route::middleware('auth')->group(function() {
    Route::get('/learners', [LearnerController::class, 'index'])->name('learners.index');
    Route::get('/learners/create', [LearnerController::class, 'create'])->name('learners.create');
    Route::get('/learners/upload/{id}', [LearnerController::class, 'upload'])->name('learners.upload');
    Route::post('/learners/storedocs', [LearnerController::class, 'storeDocuments'])->name('learners.storedocuments');
    Route::post('/learners/store', [LearnerController::class, 'store'])->name('learners.store');
    Route::get('/learners/edit/{id}', [LearnerController::class, 'edit'])->name('learners.edit');
    Route::get('/learners/view/{id}', [LearnerController::class, 'show'])->name('learners.show');
    Route::patch('/learners/update', [LearnerController::class, 'update'])->name('learners.update');
    Route::delete('/learners', [LearnersController::class, 'destroy'])->name('learners.destroy');
});

Route::middleware('auth')->group(function() {
    Route::get('/admin/centers/index', [CenterController::class, 'index'])->name('centers.index');
    Route::get('/admin/centers/create', [CenterController::class, 'create'])->name('centers.create');
    Route::post('/admin/centers/store', [CenterController::class, 'store'])->name('centers.store');
    Route::get('/admin/centers/edit/{id}', [CenterController::class, 'edit'])->name('centers.edit');
    Route::get('/admin/centers/view/{id}', [CenterController::class, 'show'])->name('centers.show');
    Route::post('/admin/centers/import', [CenterController::class, 'import'])->name('centers.import');

    Route::get('/admin/learners', [LearnerController::class, 'index'])->name('learners.index');
});

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
})->withoutMiddleware('csrf');


require __DIR__.'/auth.php';

//Route::resource('admin/posts', 'App\Http\Controllers\Admin\PostController');