<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternetPackage extends Model
{
    use HasFactory;

    // Tentukan tabel jika namanya berbeda dari default (opsional)
    // protected $table = 'internet_packages';

    // Tentukan kolom yang dapat diisi secara massal
    protected $fillable = ['name', 'price'];

    // Tentukan tipe data untuk setiap kolom (opsional)
    protected $casts = [
        'price' => 'decimal:2', // Format harga menjadi dua angka desimal
    ];

    // Jika Anda memiliki timestamps yang berbeda atau ingin menonaktifkannya (opsional)
    // public $timestamps = false;

    /**
     * Jika terdapat relasi dengan model lain, Anda bisa mendefinisikannya di sini.
     * Misalnya, jika paket internet terkait dengan pengguna atau transaksi:
     * 
     * public function users()
     * {
     *     return $this->belongsToMany(User::class);
     * }
     */
}
