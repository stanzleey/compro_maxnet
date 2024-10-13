<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pole;

class PoleSeeder extends Seeder
{
    public function run()
    {
        Pole::create([
            'name' => 'Tiang 1',
            'latitude' => -6.200000,
            'longitude' => 106.816666
        ]);

        Pole::create([
            'name' => 'Tiang 2',
            'latitude' => -6.210000,
            'longitude' => 106.826666
        ]);
    }
}
