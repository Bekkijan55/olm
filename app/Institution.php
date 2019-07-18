<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Profile;

class Institution extends Model
{
    protected $fillable = ['inst_uz','inst_uz2','inst_ru'];

    public function profile() {
        return $this->belongsToMany(Profile::class,'institution_profile');
    }

}
