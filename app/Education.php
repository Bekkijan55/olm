<?php

namespace App;
use App\Education;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = ['edu_uz','edu_uz2','edu_ru'];

    public function profile() {
        return $this->hasMany(Profile::class,'id','education_id');
    }

}
