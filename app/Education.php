<?php

namespace App;
use App\Education;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = ['edu_uz','edu_uz2','edu_ru'];

    public function user() {
        return $this->hasMany(User::class,'id','education_id');
    }

}
