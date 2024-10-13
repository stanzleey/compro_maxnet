<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Site;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class SiteController extends Controller
{
    public function index()
    {
        $sites = Site::all();
        return Inertia::render('Sites/Index', [
            'sites' => $sites,
        ]);
    }

    public function create()
    {
        return Inertia::render('Sites/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'site_id' => 'required|unique:sites,site_id',
            'site_name' => 'required',
            'site_parent' => 'required',
            'site_picture' => 'required',
            'site_type_id' => 'required',
            'site_location_maps' => 'required',
            'site_address' => 'required',
            'site_port_capacity' => 'required|integer',
        ]);

        Site::create($request->all());

        // return redirect()->route('sites.index');
        return redirect()->route('sites.index')->with('success', 'Site created successfully.');
    }

    public function edit(Site $site)
    {
        return Inertia::render('Sites/Edit', [
            'site' => $site
        ]);
        return redirect()->route('sites.index')->with('success', 'Site edited successfully.');
    }

    public function update(Request $request, Site $site)
    {
        $request->validate([
            'site_id' => 'required',
            'site_name' => 'required',
            'site_parent' => 'required',
            'site_picture' => 'required',
            'site_type_id' => 'required',
            'site_location_maps' => 'required',
            'site_address' => 'required',
            'site_port_capacity' => 'required|integer',
        ]);

        $site->update($request->all());

        // return redirect()->route('sites.index');
        return redirect()->route('sites.index')->with('success', 'Site updated successfully.');
    }

    public function destroy(Site $site)
    {
      
        $site->delete();

        return redirect()->route('sites.index');
    }

   public function show($id)
   {
       // Fetch site details from database
       $site = Site::findOrFail($id);

       // Parse coordinates from site_location_maps
       list($lat, $lng) = explode(',', $site->site_location_maps);

       // Pass site data to Inertia React component
       return Inertia::render('SiteDetails', [
           'site' => [
               'name' => $site->site_name,
               'address' => $site->site_address,
               'lat' => floatval($lat),
               'lng' => floatval($lng),
           ],
       ]);
   }
   public function getSites()
   {
       $sites=Site::all();
       return response()->json($sites);
   }

}

