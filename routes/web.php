<?php

use Inertia\Inertia;
// use TiangController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PoleController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CustomerController;

use App\Http\Controllers\Admin\RoleController;

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

use App\Http\Controllers\Admin\UserController;


// routes/web.php

use App\Http\Controllers\CoordinateController;
use App\Http\Controllers\Admin\ProfileController;
Route::get('/peta', [PoleController::class, 'index']);


Route::post('/save-coordinates', [CoordinateController::class, 'store']);
Route::get('/coordinates', [CoordinateController::class, 'index']);
Route::get('/map', function () {
    return Inertia::render('MapComponent');
});
Route::get('/home', function () {
    return Inertia::render('Home');
});
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\InternetPackageController;
use App\Http\Controllers\PaketController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\UserCustomerController;
use App\Http\Controllers\UserServiceController;

Route::post('/save-coordinates', function (Request $request) {
    // Simpan koordinat ke dalam database atau lakukan pemrosesan lain
    $lat = $request->input('lat');
    $lng = $request->input('lng');

    // Contoh menyimpan ke dalam database (pastikan membuat model dan migrasi terlebih dahulu)
    // Coordinate::create(['latitude' => $lat, 'longitude' => $lng]);

    return response()->json(['message' => 'Koordinat berhasil disimpan']);
});
// Route::get('/services', [UserServiceController::class, 'User']);
Route::get('/', [HomeController::class, 'index'])->name('home'); 

Route::get('/product/checkout', [HomeController::class, 'productCheckout'])->name('product.checkout'); 
Route::get('/product/{id}', [HomeController::class, 'productDetail'])->name('product.detail');

Route::get('/lacak-pemeriksaan', [HomeController::class, 'lacakPemeriksaan'])->name('lacak-pemeriksaan'); 

Route::get('/riwayat-transaksi', [HomeController::class, 'riwayatTransaksi'])->name('riwayat-transaksi'); 

Route::get('/admin/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

//Contact/ Sales
Route::get('/contact', function () {
    return Inertia::render('ContactForm');
});

// Route::resource('contacts', ContactController::class);
Route::post('/contact', [ContactController::class, 'store']);
Route::resource('contacts', ContactController::class);

// Sercvice
Route::resource('services', ServiceController::class);
Route::get('/admin/services', [ServiceController::class, 'index'])->name('services.index'); 
Route::get('/admin/services/create', [ServiceController::class, 'create'])->name('services.create'); 
Route::get('/api/services', [ServiceController::class, 'index']);
// Paket
Route::get('/paket', [PaketController::class, 'Index']);
// Route::get('/', [PaketController::class, 'Index']);
// Route::get('/admin/internet-packages', [InternetPackageController::class, 'index'])->name('internet-packages.index'); 
// Route::get('/admin/internet-packages/create', [InternetPackageController::class, 'create'])->name('internet-packages.create'); 
// Route::resource('internet-packages', InternetPackageController::class);

// Site
Route::get('/admin/sites', [SiteController::class, 'index'])->name('sites.index'); 
Route::get('/admin/sites/create', [SiteController::class, 'create'])->name('sites.create'); 
Route::resource('sites', SiteController::class);

// Customer
Route::get('/customers', function () {
    return Inertia::render('Form');
});

Route::resource('customers', CustomerController::class);
Route::get('/customers', [CustomerController::class, 'index'])->name('customers.index');
Route::post('/customers', [CustomerController::class, 'store']);
Route::get('/customers', [PelangganController::class, 'Index']);
Route::get('/admin/customers', [CustomerController::class, 'index'])->name('customers.Index'); 
Route::get('/admin/customer/create', [CustomerController::class, 'create'])->name('customer.create'); 

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('/users', 'index')->name('users.index');
        Route::get('/users/data', 'data')->name('users.data');
        Route::post('/users', 'store')->name('users.store');
        Route::put('/users/{id}/verify', 'verify')->name('users.verify');
        Route::put('/users/{id}', 'update')->name('users.update');
        Route::delete('/users/{id}', 'destroy')->name('users.destroy');
    });

    Route::controller(RoleController::class)->group(function () {
        Route::get('/roles', 'index')->name('roles.index');
        Route::get('/roles/data', 'data')->name('roles.data');
        Route::post('/roles', 'store')->name('roles.store');
        Route::put('/roles/{id}', 'update')->name('roles.update');
        Route::delete('/roles/{id}', 'destroy')->name('roles.destroy');
    });

    Route::controller(ServiceController::class)->group(function () {
        Route::get('/services', 'index')->name('services.index');
        Route::get('/services/create', [ServiceController::class, 'create'])->name('services.create');
        Route::post('/services', [ServiceController::class, 'store'])->name('services.store');
        Route::get('/services/{serv_id}/edit', [ServiceController::class, 'edit'])->name('services.edit');
        Route::put('/services/{serv_id}', [ServiceController::class, 'update'])->name('services.update');
        Route::delete('/services/{id}', [ServiceController::class, 'destroy'])->name('services.destroy');
        
    });


    Route::controller(SiteController::class)->group(function () {
    //    Route::get('/sites/{id}', [SiteController::class, 'show'])->name('sites.show');
        Route::get('/sites', 'index')->name('sites.index');
        Route::get('/sites/create', [SiteController::class, 'create'])->name('sites.create');
        Route::post('/sites', [SiteController::class, 'store'])->name('sites.store');
        Route::get('/sites/{site_id}/edit', [SiteController::class, 'edit'])->name('sites.edit');
        Route::put('/sites/{site_id}', [SiteController::class, 'update'])->name('sites.update');
        Route::delete('/sites/{site_id}', [SiteController::class, 'destroy'])->name('sites.destroy');
    });

    Route::controller(CustomerController::class)->group(function () {
        //    Route::get('/sites/{id}', [SiteController::class, 'show'])->name('sites.show');
            Route::get('/customers', 'index')->name('customers.index');
            Route::get('/customers/create', [CustomerController::class, 'create'])->name('customers.create');
            Route::post('/customers', [CustomerController::class, 'store'])->name('customers.store');
            Route::get('/customers/{id}/edit', [CustomerController::class, 'edit'])->name('customers.edit');
            Route::put('/customers/{id}', [CustomerController::class, 'update'])->name('customers.update');
            Route::delete('/customers/{id}', [CustomerController::class, 'destroy'])->name('customers.destroy');
        });

    //  Route::resource('contacts', ContactController::class);
    Route::controller(ContactController::class)->group(function () {
        //    Route::get('/sites/{id}', [SiteController::class, 'show'])->name('sites.show');
        Route::post('/contacts', [ContactController::class, 'store'])->name('contacts.store');
            Route::get('/contacts', 'index')->name('contacts.index');
            Route::get('/contacts/create', [ContactController::class, 'create'])->name('contacts.create');
            Route::post('/contacts', [ContactController::class, 'store'])->name('contacts.store');
            Route::get('/contacts/{id}/edit', [ContactController::class, 'edit'])->name('contacts.edit');
            Route::put('/contacts/{id}', [ContactController::class, 'update'])->name('contacts.update');
            Route::delete('/contacts/{id}', [ContactController::class, 'destroy'])->name('contacts.destroy');
        });
    Route::get('/api/services/count',[ServiceController::class,'count']);
});

require __DIR__.'/auth.php';
