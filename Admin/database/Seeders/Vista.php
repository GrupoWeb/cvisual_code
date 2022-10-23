<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Vista extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vistas')->insert([
            'name'  =>  'Usuarios'
            'created_at'    =>  now(),
            'updated_at'    =>  now()
        ]);
    }
}
