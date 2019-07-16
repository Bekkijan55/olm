<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Role;
use App\Okrug;
use App\Education;
use App\Nation;
use App\Institution;
use App\Profile;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function roles() {
        return $this->belongsToMany(Role::class,'role_user');
    }

    public function insts() {
        return $this->belongsToMany(Institution::class,'institution_users');
    }

    public function okrug() {
        return $this->belongsTo(Okrug::class,'okrug_id','id');
    }

    public function education() {
        return $this->belongsTo(Education::class,'education_id','id');
    }

    public function nation() {
        return $this->belongsTo(Nation::class,'nation_id','id');
    }

    public function party() {
        return $this->belongsTo(Party::class,'party_id','id');
    } 

    public function profile() {
        return $this->hasOne(Profile::class,'id','user_id');
    }
}
