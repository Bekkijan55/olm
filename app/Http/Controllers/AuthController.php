<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{

    public $restful = true;

    public function __construct() {
        return auth()->shouldUse('api');
    }

    public function login(Request $request) {
        // return $request->all();
        $credentials = $request->only(['email','password']);
        if(!$token = auth()->attempt($credentials)) {
            http_response_code(404);
            return response()->json(['error' => 'Unauthorized'],404);
        }
        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory('api')->getTTL()*60
        ]);
    }

    public function logout() {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out successfully'
        ],200);
    }

    public function user(Request $request) {
        $user = User::find(Auth::user()->id);

        return new UserResource($user);
    }

    public function refresh() {
        if($token = $this->guard()->refresh) {
            return response()
            ->json(['status' => 'success'],200)
            ->header('Authorization',$token);
        }
        return response()->json(['error' => 'refresh_token_error'],401);
    }

    private function guard() {
        return Auth::guard();
    }
}
