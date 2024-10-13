<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::where('is_visible', 1)->get();
     
        return Inertia::render('Services/Index',  ['services' => $services]);
        // return Inertia::render('Services/User',  ['services' => $services]);
    }

    
    public function create()
    {
        return Inertia::render('Services/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'serv_id' => 'required|string|max:255',
            'service_name' => 'required|string|max:255',
            'service_speed' => 'required|integer',
            'service_description' => 'required|string|max:255',
            'service_price' => 'required|string|max:255',
            'service_discount' => 'required|string|max:255',
            'is_visible' => 'boolean',
        ]);

        Service::create($validated);

        return redirect()->route('services.index');
    }

    public function show(Service $service)
    {
        return Inertia::render('Services/Show', ['service' => $service]);
    }

    public function edit(Service $service)
    {
        return Inertia::render('Services/Edit', ['service' => $service]);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'service_name' => 'required|string|max:255',
            'service_speed' => 'required|integer',
            'service_description' => 'required|string|max:255',
            'service_price' => 'required|string|max:255',
            'service_discount' => 'required|string|max:255',
            'is_visible' => 'boolean',
        ]);

        $service->update($validated);

        return redirect()->route('services.index');
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->route('services.index');
    }

    public function showServices()
    {
        $services=Service::all();
        return response()->json($services);
    }

    public function count()
    {
        // Fetch the count of customers
        $count = Service::count();
    
        // Pass the data to the Inertia dashboard view
       return response()->json(['count'=> $count]);
    }
}

