<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaketInternetsTable extends Migration
{
    public function up()
    {
        Schema::create('paket_internets', function (Blueprint $table) {
            $table->id();
            $table->string('service_name');
            $table->integer('service_speed');
            $table->decimal('service_price', 8, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('paket_internets');
    }
}
