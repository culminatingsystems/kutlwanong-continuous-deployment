<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Center;

class LearnersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'idNum' => $this->identity_number,
            'fullName' =>$this->learner_name,
            'surname' => $this->learner_surname,
            'grade' => $this->grade,
            'gender' => $this->gender,
            'center' => Center::find($this->school_name)->center_name,
        ];
    }
}
