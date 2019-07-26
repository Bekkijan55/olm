<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\KnowledgeBaseItem;

class KnowledgeBaseCategory extends Model
{
    protected $fillable = ['title_ru','title_uz','title_uz2','desc_ru','desc_uz','desc_uz2','photo'];

    public function items() {
        return $this->hasMany(KnowledgeBaseItem::class,'cat_id','id');
    }

}
