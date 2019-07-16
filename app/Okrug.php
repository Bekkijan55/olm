<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Okrug extends Model
{
    protected $fillable = ['okrug_uz','okrug_uz2','okrug_ru'];

    public function user() {
        return $this->hasMany(User::class,'id','okrug_id');
    }
}
