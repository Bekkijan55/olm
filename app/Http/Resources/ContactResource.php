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
            'mobnum' => $this->mob_num,
            'worknum' => $this->work_num,
            'birthday' => $this->birthday,
            'photo' => $this->avatar,
            'desc' => $this->description,
            'date' => $this->birthday,
            'created_at' => $this->created_at 
        ];
    }
}
