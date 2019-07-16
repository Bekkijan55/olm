<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Okrug;
use App\Http\Resources\OkrugResource;

class OkrugController extends Controller
{
    public function getOkrug() {
        $ok = Okrug::all();

        return OkrugResource::collection($ok);
    }

    public function addOkrug(Request $request) {
        $ok = Okrug::create($request->all());

        return new OkrugResource($ok);
    }

    public function updateOkrug(Request $request) {
        $ok = Okrug::findOrFail($request->input('id'));
        $ok->update($request->all());

        return new OkrugResource($ok);
    }
}
