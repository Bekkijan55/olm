<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Resources\RoleResource;
use App\User;
use App\Role;
use App\RoleUser;

class UsersController extends Controller
{
    public function getUsers() {
        $users = User::with('roles')->orderBy('id','desc')->get();

        $roles = Role::all();

        return [UserResource::collection($users),RoleResource::collection($roles)];
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
}
