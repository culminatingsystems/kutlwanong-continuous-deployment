<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CentersResource extends JsonResource
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
            'centerName' => $this->center_name,
            'centerVenue' =>$this->center_venue,
            'manager' => $this->center_manager,
            'province' => $this->center_province,
            'schoolAddress' => $this->school_physical_address,
            'managerContact' => $this->manager_contact,
            'schoolContact' => $this->school_contact,
            'email' => $this->kutlwanong_email,
            'allocation' => $this->allocation,
            'overflow' => $this->overflow,
            //'totalCenters' => \App\Models\Center::sum()
        ];
    }
}
