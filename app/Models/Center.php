<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Center
 *
 * @property $id
 * @property $center_name
 * @property $center_venue
 * @property $center_manager
 * @property $center_province
 * @property $school_physical_address
 * @property $manager_contact
 * @property $school_contact
 * @property $kutlwanong_email
 * @property $total_learners
 * @property $allocation
 * @property $created_at
 * @property $updated_at
 *
 * @property Learner[] $learners
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Center extends Model
{
    

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['center_name', 'center_venue', 'center_manager', 'center_province', 'school_physical_address', 'manager_contact', 'school_contact', 'kutlwanong_email', 'total_learners', 'allocation', 'overflow', 'status'];

    protected $attributes = [
        'allocation' => 0,
        'overflow' => 0,
        'status' => 'Active'
    ];

    public function getAllocationAttribute($value){
        return $value ?? 0;
    }

    public function getOverflowAttribute($value){
        return $value ?? 0;
    }

    public function getStatusAttribute($value){
        return $value ?? 'Active';
    }

    protected static function booted(){
        static::creating(function($model){
            if(is_null($model->allocation)){
                $model->allocation = 0;
            }

            if(is_null($model->overflow)){
                $model->overflow = 0;
            }

            if(is_null($model->status)){
                $model->status = 'Active';
            }

            if(is_null($model->center_name) && !is_null($model->center_venue)){
                $model->center_name = $model->center_venue;
            }
        });
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function learners()
    {
        return $this->hasMany(\App\Models\Learner::class, 'id', 'center');
    }
    

}
