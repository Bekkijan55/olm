<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Party;

class Party extends Model
{
    protected $fillable = ['party_uz','party_uz2','party_ru'];

    public function user() {
        return $this->hasMany(User::class,'id','party_id');
    }

}
