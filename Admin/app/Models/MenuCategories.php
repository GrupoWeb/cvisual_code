<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuCategories extends Model
{
    use HasFactory;

    protected $fillable = [
        "name"
    ];

    public function menu()
    {
        return $this->HasMany(\App\Menu::class, 'menu_category_id', 'id')->where('parent_menu_id', '=',  0);
    }
}
