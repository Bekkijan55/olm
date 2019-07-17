<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Party extends Model
{
    protected $fillable = ['party_uz','party_uz2','party_ru'];

    public function profile() {
        return $this->hasMany(Profile::class,'id','party_id');
    }

}
