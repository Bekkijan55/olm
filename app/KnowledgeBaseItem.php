<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\KnowledgeBaseCategory;

class KnowledgeBaseItem extends Model
{

    protected $fillable = ['cat_id','title_ru','title_uz','title_uz2','body_ru','body_uz','body_uz2'];
    
    public function category() {
        return $this->belongsTo(KnowledgeBaseCategory::class,'cat_id','id');
    }
}
