<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
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
            'gender' => $this->gender,
            'email' => $this->email,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'middlename' => $this->middlename,
            'mob_num' => $this->mob_num,
            'work_num' => $this->work_num,
            'birthday' => $this->birthday,
            'avatar' => $this->avatar,
            'desc' => $this->description,
            'birthday' => $this->birthday 
        ];
    }
}
