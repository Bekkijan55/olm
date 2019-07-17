<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
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
            'user' => $this->user,
            'insts' => $this->insts,
            'okrug' => $this->okrug,
            'edu' => $this->education,
            'nation' => $this->nation,
            'party' => $this->party,
            'birthplace' => $this->birthplace,
            'regis_address' => $this->registered_address,
            'actual_address' => $this->actual_address,
            'work_phone' => $this->work_phone,
            'phone' => $this->phone,
            'mob_phone' => $this->mobile_phone,
            'created_at' =>$this->created_at
        ];
    }
}
