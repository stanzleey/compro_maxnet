<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    // Nama tabel yang digunakan oleh model ini
    protected $table = 'customers';

    // Kolom-kolom yang bisa diisi (mass assignable)
    protected $fillable = [
        'name',
        'email',
        'nik',
        'address_ktp',
        'phone_number',
        'internet_package',
        'installation_address',
        'koordinat_pasang',
        'ktp_photo',
        'house_photo',
    ];

    public $timestamps = true;
}
