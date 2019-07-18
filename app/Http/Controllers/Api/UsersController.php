<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserCredsResource;
use App\Http\Resources\NationsResource;
use App\Http\Resources\EducationResource;
use App\Http\Resources\PartyResource;
use App\Http\Resources\OkrugResource;
use App\Http\Resources\InstitutionResource;
use App\User;
use App\Role;
use App\RoleUser;
use App\Nation;
use App\Education;
use App\Party;
use App\Okrug;
use App\Institution;
use App\InstitutionProfile;
use App\UserNames;
use Image;
use File;
use App\Profile;
use Carbon\Carbon;

class UsersController extends Controller
{
    public function getUsers() {
        $users = User::orderBy('id','desc')->get();

        $roles = Role::all();

        return [UserCredsResource::collection($users),RoleResource::collection($roles)];
    }
    public function addUser(Request $request) {
        // return $request->input('selectedRole');
        $user = new User;

        if($request->photo) {
            $photo = $this->upload_image($request);
            $user->photo = $photo;
        }
        if($request->birthdate) {
            $user->birthdate = $request->input('birthdate');
        }       
        $user->name = $request->input('name');
        
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));

        $user->save();
        if(!empty($request->input('selectedRole'))){
       foreach($request->input('selectedRole') as $sr) {           
        $userrole = new RoleUser;
        $userrole->user_id = $user->id;
        $userrole->role_id = $sr['id'];
        $userrole->save();
       }
    }
        
        return new UserResource($user);

    }

    public function getById(Request $request) {
        $user = User::findOrFail($request->input('id'));
        $nation = Nation::all();
        $edu = Education::all();
        $party = Party::all();
        $okrug = Okrug::all();
        $inst = Institution::all();
        $roles = Role::all();

        return [new UserCredsResource($user),NationsResource::collection($nation),EducationResource::collection($edu),
        PartyResource::collection($party),OkrugResource::collection($okrug),InstitutionResource::collection($inst),
        RoleResource::collection($roles)];
    }

    public function viewUsers(Request $request) {
        $user = User::findOrFail($request->input('id'));
        
        return new UserCredsResource($user);
    }

    public function updateUser(Request $request) {
        // return $request->all();
        $ru = RoleUser::where('user_id',$request->input('id'))->delete();
        
        $user = User::findOrFail($request->input('id'));
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        if($request->input('password') != null) {
            $user->password = bcrypt($request->input('password'));
        }
        $user->save();

        foreach($request->input('selectedRole') as $sr) {
            $role = new RoleUser;
            $role->user_id = $request->input('id');
            $role->role_id = $sr['id'];
            $role->save();
        }

        return new UserResource($user);      
        
    }

    public function addUserCreds(Request $request) {
        return $request->all();  
        
        $u = User::findOrFail($request->input('id'));
        if($request->input('photo') != null) {
            $photo = $this->upload_image($request);
            $u->photo = $photo;
        }
        $u->name=$request->input('name');
        
        $u->birthdate = $request->input('birthdate');
        $u->email = $request->input('email');

        $u->save();

        $ru = RoleUser::where('user_id',$u->id)->delete();

        foreach($request->input('roles') as $rr) {
            $ru = new RoleUser;
            $ru->user_id = $u->id;
            $ru->role_id = $rr['id'];
            $ru->save();
        }        
      
        if($request->input('prof_id') == null) {
            $p = new Profile;
            $p->user_id = $request->input('id');
        }
        else {
            $p = Profile::findOrFail($request->input('prof_id'));
            $ip = InstitutionProfile::where('profile_id',$request->input('prof_id'))->delete();           
            }

        $p->education_id = $request->input('edu');
        $p->nation_id = $request->input('nation');
        $p->party_id = $request->input('party');
        $p->okrug_id = $request->input('okrug');
        $p->birthplace = $request->input('birthplace');
        $p->registered_address = $request->input('registered_address');
        $p->actual_address = $request->input('actual_address');
        $p->work_phone = $request->input('work_phone');
        $p->phone = $request->input('phone');
        $p->mobile_phone = $request->input('mobile_phone');
    

        $p->save();

        if($request->input('username_id') != null) {
            $usernames = UserNames::findOrFail($request->input('username_id'));
            
        }
        else { 
            $usernames = new UserNames;
            $usernames->profile_id = $p->id;
        }

        $usernames->firstname_uz = $request->input('firstname_uz');
        $usernames->firstname_uz2 = $request->input('firstname_uz2');
        $usernames->firstname_ru = $request->input('firstname_ru');

        $usernames->lastname_uz = $request->input('lastname_uz');
        $usernames->lastname_uz2 = $request->input('lastname_uz2');
        $usernames->lastname_ru = $request->input('lastname_ru');

        $usernames->surname_uz = $request->input('surname_uz');
        $usernames->surname_uz2 = $request->input('surname_uz2');
        $usernames->surname_ru = $request->input('surname_ru');
       

        $usernames->save();

        foreach($request->input('insts') as $ins) {
            $ip = new InstitutionProfile;
            $ip->profile_id = $p->id;
            $ip->institution_id = $ins;
            $ip->save();
        }

        return new UserCredsResource($u);


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

        $path = 'uploads/users/'.$request->input('name');

        if(!file_exists(public_path().'/'.$path)) {
            File::makeDirectory($path,0755,true);
        }

        $img->save(public_path('uploads/users/'.$request->input('name').'/'.$filename));

        $filepath = '/uploads/users/'.$request->input('name') .'/'.$filename;

        return $filepath;
    }
}
