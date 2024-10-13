<?php

// app/Http/Controllers/CoordinateController.php

namespace App\Http\Controllers;

use App\Models\Coordinate;
use Illuminate\Http\Request;

class CoordinateController extends Controller
{
    // Fungsi untuk menyimpan koordinat
    public function store(Request $request)
    {
        $request->validate([
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'description' => 'nullable|string'
        ]);

        // Menyimpan koordinat ke database
        Coordinate::create([
            'latitude' => $request->lat,
            'longitude' => $request->lng,
            'description' => $request->description
        ]);

        return response()->json(['message' => 'Koordinat berhasil disimpan!'], 201);
    }

    // Fungsi untuk mendapatkan semua koordinat
    public function index()
    {
        $coordinates = Coordinate::all();
        return response()->json($coordinates);
    }
}

