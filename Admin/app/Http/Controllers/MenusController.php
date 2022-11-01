<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuCategories;
use App\Models\Menu;

class MenusController extends Controller
{
    //
    public function index()
    {
        $data = MenuCategories::with('menu.submenu.submenu')->get();
        return response()->json($data);
    }

    public function menus(){
        $data = Menu::
    }
}
