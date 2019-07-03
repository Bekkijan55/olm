<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Image;
use File;
use Carbon\Carbon;
use App\Http\Resources\ContactResource;

class ContactController extends Controller
{
    public function store(Request $request) {
        // return $request->all();
        $con = new Contact;
        
        $con->firstname = $request->input('firstname');
        $con->lastname = $request->input('lastname');
        $con->middlename = $request->input('middlename');
        $con->mob_num = $request->input('mobnum');
        $con->work_num = $request->input('worknum');
        $con->email = $request->input('email');
        $con->birthday = Carbon::parse($request->input('date'));
        $con->description = $request->input('description');
        if($request->input('gender') == 'male') {
            $con->gender = 1;
        }
         else $con->gender = 0;
         if(!empty($request->photo)) {
             $photo = $this->upload_image($request);
             $con->avatar = $photo;
         }

         $con->save();

         return response()->json($con);
    }

    private function upload_image($request) {
        $exploded = explode(',',$request->photo);
        $decoded = base64_decode($exploded[1]);
        if(str_contains($exploded[0],'jpeg')) {
            $extension = 'jpeg';
        }
        if(str_contains($exploded[0],'jpg')) {
            $extension = 'jpg';
        }
        if(str_contains($exploded[0],'png')) {
            $extension = 'png';
        }
        $filename = str_random(). '.'.$extension;

        $img = Image::make($request->photo);

        $img->fit(400,400);

        $path = 'uploads/avatars/'.$request->input('firstname');

        if(!file_exists(public_path().'/'.$path)) {
            File::makeDirectory($path,0755,true);
        }

        $img->save(public_path('uploads/avatars/'.$request->input('firstname').'/'.$filename));

        $filepath = '/uploads/avatars/'.$request->input('firstname') .'/'.$filename;

        return $filepath;
    }

    public function getContacts() {
        $cons = Contact::all();

        return ContactResource::collection($cons);
    }
}
