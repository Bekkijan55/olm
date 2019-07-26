<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KnowledgeBaseCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'title_ru' => $this->title_ru,
            'title_uz' => $this->title_uz,
            'title_uz2' => $this->title_uz2,
            'desc_ru' => $this->desc_ru,
            'desc_uz' => $this->desc_uz,
            'desc_uz2' => $this->desc_uz2,
            'photo' => $this->photo,
            'items' => $this->items ? KnowledgeBaseItemResource::collection($this->items) : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
