<?php

namespace App\Http\Controllers;

use App\Models\PaketInternet;
use App\Models\Pembelian;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketInternetController extends Controller
{
    // Menampilkan daftar paket internet
    public function index()
    {
        $services = PaketInternet::all();  // Mengambil semua paket internet
        return Inertia::render('PaketInternet', [
            'services' => $services
        ]);
    }

    // Menyimpan data pembelian
    public function store(Request $request)
    {
        // Validasi data dari form
        $request->validate([
            'nama_ktp' => 'required|string|max:255',
            'alamat_ktp' => 'required|string|max:255',
            'nik' => 'required|digits:16',
            'email' => 'required|email',
            'no_hp' => 'required|string',
            'alamat_pemasangan' => 'required|string|max:255',
            'foto_ktp' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'foto_rumah' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'paket_id' => 'required|exists:paket_internets,id'
        ]);

        // Upload foto KTP dan foto rumah
        $fotoKtpPath = $request->file('foto_ktp')->store('public/foto_ktp');
        $fotoRumahPath = $request->file('foto_rumah')->store('public/foto_rumah');

        // Simpan data pembelian
        Pembelian::create([
            'nama_ktp' => $request->nama_ktp,
            'alamat_ktp' => $request->alamat_ktp,
            'nik' => $request->nik,
            'email' => $request->email,
            'no_hp' => $request->no_hp,
            'alamat_pemasangan' => $request->alamat_pemasangan,
            'foto_ktp' => $fotoKtpPath,
            'foto_rumah' => $fotoRumahPath,
            'paket_id' => $request->paket_id,
        ]);

        return redirect()->back()->with('message', 'Pembelian berhasil!');
    }
}
