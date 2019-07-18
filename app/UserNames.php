<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Profile;

class UserNames extends Model
{
    public function profile() {
        return $this->belongsTo(Profile::class);
    }
}
