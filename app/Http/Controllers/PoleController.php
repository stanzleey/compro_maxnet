<?php
namespace App\Http\Controllers;

use App\Models\Pole;
use Inertia\Inertia;

class PoleController extends Controller
{
    public function index()
    {
        $poles = Pole::all();
        return Inertia::render('MapPage', [
            'poles' => $poles
        ]);
    }
}
