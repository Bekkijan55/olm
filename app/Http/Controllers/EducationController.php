<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EducationResource;
use App\Education;

class EducationController extends Controller
{
    public function getEdu() {
        $edu = Education::all();

        return EducationResource::collection($edu);
    }

    public function storeEdu(Request $request) {
        
        $edu = new Education;
        $edu->edu_uz = $request->input('edu_uz');
        $edu->edu_uz2 = $request->input('edu_uz2');
        $edu->edu_ru = $request->input('edu_ru');

        $edu->save();

        return new EducationResource($edu);
    }

    public function updateEdu(Request $request) {
        $e = Education::findOrFail($request->input('id'));
        $e->update($request->all());

        return new EducationResource($e);
    }
}
