<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'lastname' => $this->lastname,
            'surname' => $this->surname,
            'email' => $this->email,
            'photo' => $this->photo,
            'birthdate' => $this->birthdate,
            'roles' => $this->roles,
            'created_at' => $this->created_at->toDateTimeString()
        ];
    }
}
