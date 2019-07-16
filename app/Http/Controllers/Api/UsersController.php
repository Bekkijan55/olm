<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserCredsResource;
use App\User;
use App\Role;
use App\RoleUser;

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
}
