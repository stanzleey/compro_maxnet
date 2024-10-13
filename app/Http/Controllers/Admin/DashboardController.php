<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $roleAuth = \Auth::user()->role_user->role;
        
        return Inertia::render('Dashboard', [
            'roleAuth' => $roleAuth
        ]);
    }
    public function dashboard()
{
    // Fetch the count of customers
    $customerCount = Customer::count();

    // Pass the data to the Inertia dashboard view
    return inertia('Dashboard', [
        'customerCount' => $customerCount,  // Pass customer count to props
        // Add other counts (userCount, roleCount, etc.) if needed
    ]);
}
}
