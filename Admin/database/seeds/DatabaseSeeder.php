<?php

use Database\Seeders\MenuSeeder;
use Database\Seeders\Vista;
use Database\Seeders\VistaUser;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([ 
            MenuSeeder::class,
            Vista::class,
            VistaUser::class
        ]);
    }
}
