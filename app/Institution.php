<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Institution extends Model
{
    protected $fillable = ['inst_uz','inst_uz2','inst_ru'];

    public function userinst() {
        return $this->belongsToMany(User::class,'institution_users');
    }

}
