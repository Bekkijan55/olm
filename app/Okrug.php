<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Profile;

class Okrug extends Model
{
    protected $fillable = ['okrug_uz','okrug_uz2','okrug_ru'];

    public function profile() {
        return $this->hasMany(Profile::class,'id','okrug_id');
    }
}
