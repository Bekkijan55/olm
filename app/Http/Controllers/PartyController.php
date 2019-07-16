<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Party;
use App\Http\Resources\PartyResource;

class PartyController extends Controller
{
    public function getParties() {
        $party = Party::all();

        return PartyResource::collection($party);
    }

    public function addParty(Request $request) {
        $p = Party::create($request->all());

        return new PartyResource($p);
    }
}
