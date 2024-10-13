<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Notifications\CustomerCreated;
use App\Notifications\CustomerCreatedNotification;
use Notification;

class PelangganController extends Controller
{
    public function index()
    {
        $services = Service::where('is_visible', 1)->get();
     
        return Inertia::render('Pelanggan/Form',  ['services' => $services]);
        // return Inertia::render('Services/User',  ['services' => $services]);
    }

    public function create()
    {
        return Inertia::render('Pelanggan/Form');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers',
            'nik' => 'required',
            'address_ktp' => 'required',
            'phone_number' => 'required',
            'internet_package' => 'required',
            'installation_address' => 'required',
            'koordinat_pasang' => 'required',
            'ktp_photo' => 'required',
            'house_photo' => 'required',
        ]);

        $customer=Customer::create($request->all());
        Notification::route('telegram', '2059000504')
        ->notify(new CustomerCreatedNotification($customer));
        return redirect()->route('customers.index');
    }

    public function edit(Customer $customer)
    {
        return Inertia::render('Customers/Edit', ['customer' => $customer]);
    }

    public function update(Request $request, Customer $customer)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers,email,' . $customer->id,
            'nik' => 'required',
            'address_ktp' => 'required',
            'phone_number' => 'required',
            'internet_package' => 'required',
            'installation_address' => 'required',
            'koordinat_pasang' => 'required',
            'ktp_photo' => 'required',
            'house_photo' => 'required',
        ]);

        $customer->update($request->all());

        return redirect()->route('customers.index');
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return redirect()->route('customers.index');
    }
}
