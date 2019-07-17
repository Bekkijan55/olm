<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Nation;

class Nation extends Model
{
    protected $fillable = [
        'nation_uz','nation_uz2','nation_ru'
    ];

    public function profile() {
        return $this->hasMany(Profile::class,'id','nation_id');
    }
}
