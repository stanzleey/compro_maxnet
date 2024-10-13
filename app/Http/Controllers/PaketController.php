<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketController extends Controller
{
    //
    public function index()
    {
        $services = Service::where('is_visible', 1)->get();
        
        return Inertia::render('Paket/Index',  ['services' => $services]);
        // return Inertia::render('Services/User',  ['services' => $services]);
    }
}
