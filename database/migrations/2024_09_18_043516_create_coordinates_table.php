// database/migrations/xxxx_xx_xx_create_coordinates_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoordinatesTable extends Migration
{
    public function up()
    {
        Schema::create('coordinates', function (Blueprint $table) {
            $table->id();
            $table->decimal('latitude', 10, 8);   // kolom untuk menyimpan latitude
            $table->decimal('longitude', 11, 8);  // kolom untuk menyimpan longitude
            $table->string('description')->nullable();  // deskripsi opsional
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('coordinates');
    }
}
