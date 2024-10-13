<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePembeliansTable extends Migration
{
    public function up()
    {
        Schema::create('pembelians', function (Blueprint $table) {
            $table->id();
            $table->string('nama_ktp');
            $table->string('alamat_ktp');
            $table->string('nik', 16);
            $table->string('email');
            $table->string('no_hp');
            $table->string('alamat_pemasangan');
            $table->string('foto_ktp');
            $table->string('foto_rumah');
            $table->foreignId('paket_id')->constrained('paket_internets')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pembelians');
    }
}
