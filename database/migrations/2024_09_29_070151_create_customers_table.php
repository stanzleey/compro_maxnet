<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');                // Nama
            $table->string('email')->unique();      // Email
            $table->string('nik');                 // NIK
            $table->string('address_ktp');         // Alamat sesuai KTP
            $table->string('phone_number');        // Nomor HP
            $table->string('internet_package');    // Paket Internet yang dibeli
            $table->string('installation_address');
            $table->string('koordinat_pasang'); // Alamat Pemasangan
            $table->string('ktp_photo')->nullable(); // Kolom foto KTP
            $table->string('house_photo')->nullable(); // Kolom foto rumah
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('customers');
    }
};
