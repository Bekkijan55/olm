<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NationsResource;
use App\Nation;

class NationController extends Controller
{
    public function getNations() {
        $nation = Nation::all();

        return NationsResource::collection($nation);
    }

    public function storeNation(Request $request) {
        $n = Nation::create($request->all());
        
        return new NationsResource($n);
    }

    public function updateNation(Request $request) {
        $nation = Nation::findOrFail($request->input('id'));
        $nation->update($request->all());
        return new NationsResource($nation);

        
    }
}
