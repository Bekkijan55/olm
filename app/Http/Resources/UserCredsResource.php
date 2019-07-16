<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCredsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        return [
            'id' => $this->id,
            'edu' => $this->education,
            'okrug' => $this->okrug,
            'nation' => $this->nation,
            'party' => $this->party,
            'insts' => $this->insts,
            'profile' => $this->profile,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'surname' => $this->surname,
            'email' => $this->email,
            'birthdate' => $this->birthdate,
            'roles' => $this->roles
        ];
    }
}
