<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

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
            'photo' => $this->photo,           
            'profile' => $this->profile ? new ProfileResource($this->profile) : null,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'surname' => $this->surname,
            'email' => $this->email,
            'birthdate' => $this->birthdate,
            'roles' => $this->roles
        ];
    }
}
