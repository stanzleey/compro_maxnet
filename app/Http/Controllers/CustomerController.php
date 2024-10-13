<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Service;
use App\Notifications\CustomerCreatedNotification;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Notification;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return Inertia::render('Customer/Index', [
            'customers' => $customers
        ]);
    }

    public function create()
    {
        // Fetch services to populate the dropdown
        $services = Service::all();
        
        return Inertia::render('Customers/Create', [
            'services' => $services,  // Pass services to the frontend
        ]);
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
            'ktp_photo' => 'nullable|image',
            'house_photo' => 'nullable|image',
        ]);

        // $data = $request->all();

        // if ($request->hasFile('ktp_photo')) {
        //     $data['ktp_photo'] = $request->file('ktp_photo')->store('photos', 'public');
        // }

        // if ($request->hasFile('house_photo')) {
        //     $data['house_photo'] = $request->file('house_photo')->store('photos', 'public');
        // }
        $ktpPhotoPath = $request->file('ktp_photo') ? $request->file('ktp_photo')->store('ktp_photos', 'public') : null;
        $housePhotoPath = $request->file('house_photo') ? $request->file('house_photo')->store('house_photos', 'public') : null;
        $customer = Customer::create([
            'name' => $request->name,
            'email' => $request->email,
            'nik' => $request->nik,
            'address_ktp' => $request->address_ktp,
            'phone_number' => $request->phone_number,
            'internet_package' => $request->internet_package,
            'installation_address' => $request->installation_address,
            'koordinat_pasang' => $request->koordinat_pasang,
            'ktp_photo' => $ktpPhotoPath,
            'house_photo' => $housePhotoPath,
        ]);


        $this->sendTelegramNotification($customer);
        return redirect()->route('customers.index')->with('success', 'Customer created successfully.');
    }
    protected function sendTelegramNotification($customer)
{
    $token = '7675606283:AAFK3sPwCAjkSg2RmD5jPrROhbGQRR6szwU';
    $chat_id = '2059000504';
    $message = "New customer created: " . $customer->name;

    $url = "https://api.telegram.org/bot{$token}/sendMessage";

    $params = [
        'chat_id' => $chat_id,
        'text' => $message,
    ];

    file_get_contents($url . '?' . http_build_query($params));
}

    public function edit(Customer $customer)
    {
        $services = Service::all(); // Fetch services for dropdown

        return Inertia::render('Customers/Edit', [
            'customer' => $customer,
            'services' => $services, // Pass services to the frontend
        ]);
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
            'ktp_photo' => 'nullable|image',
            'house_photo' => 'nullable|image',
        ]);

        $data = $request->all();

        if ($request->hasFile('ktp_photo')) {
            // Delete old photo if exists
            if ($customer->ktp_photo) {
                \Storage::disk('public')->delete($customer->ktp_photo);
            }
            $data['ktp_photo'] = $request->file('ktp_photo')->store('photos', 'public');
        }

        if ($request->hasFile('house_photo')) {
            // Delete old photo if exists
            if ($customer->house_photo) {
                \Storage::disk('public')->delete($customer->house_photo);
            }
            $data['house_photo'] = $request->file('house_photo')->store('photos', 'public');
        }

        $customer->update($data);
        return redirect()->route('customers.index')->with('success', 'Customer updated successfully.');
    }

    public function destroy(Customer $customer)
    {
        // Delete photos if exists
        if ($customer->ktp_photo) {
            \Storage::disk('public')->delete($customer->ktp_photo);
        }
        if ($customer->house_photo) {
            \Storage::disk('public')->delete($customer->house_photo);
        }
        $customer->delete();
        return redirect()->route('customers.index')->with('success', 'Customer deleted successfully.');
    }

    public function show($id)
    {
        $customer = Customer::findOrFail($id);

        return Inertia::render('Customer/Show', [
            'customer' => $customer,
        ]);
    }
}

