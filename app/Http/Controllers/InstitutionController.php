<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Institution;
use App\Http\Resources\InstitutionResource;

class InstitutionController extends Controller
{
    public function getInst() {
        $inst = Institution::all();

        return InstitutionResource::collection($inst);
    }

    public function storeInst(Request $request) {
        $inst = Institution::create($request->all());

        return new InstitutionResource($inst);
    }

    public function updateInst(Request $request) {
        $inst = Institution::findOrFail($request->input('id'));

        $inst->update($request->all());

        return new InstitutionResource($inst);
    }
}
