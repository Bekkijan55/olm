<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\User;

use App\Okrug;
use App\Education;
use App\Nation;
use App\Institution;

class Profile extends Model
{

    

    public function user() {
        return $this->belongsTo(User::class,'user_id','id');
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

}
