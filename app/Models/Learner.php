<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * Class Learner
 *
 * @property $id
 * @property $learner_name
 * @property $learner_surname
 * @property $gender
 * @property $identity_number
 * @property $learner_id
 * @property $school_name
 * @property $join_date
 * @property $exit_date
 * @property $status
 * @property $replacment
 * @property $grade
 * @property $contact_number
 * @property $alternative_number
 * @property $physical_address
 * @property $learner_province
 * @property $learner_race
 * @property $learner_nationality
 * @property $learner_home_language
 * @property $disability
 * @property $reg_documents
 * @property $id_copy
 * @property $4th_term_report
 * @property $created_at
 * @property $updated_at
 *
 * @property LearnerAddress[] $learnerAddresses
 * @property LearnerParent[] $learnerParents
 * @property LearnerSubject[] $learnerSubjects
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Learner extends Model
{
    

    protected $perPage = 20;

    protected $primaryKey = 'id';

    protected $casts = [
        'id' => 'string',
    ];

    /*protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (!$model->id) {
                $model->id = uniqid(); // Set the id value using uniqid() function or any other method
            }
        });
    }*/

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    /*protected $fillable = ['id', 'learner_name', 'learner_surname', 'gender', 'identity_number', 'school_name', 'status', 'grade', 'contact_number', 'alternative_number', 'physical_address', 'learner_province', 'learner_race', 'learner_nationality', 'learner_home_language'];*/

    protected $fillable = ['id', 'learner_name', 'learner_surname', 'gender', 'identity_number', 'learner_id', 'school_name', 'join_date', 'exit_date', 'status', 'replacment', 'grade', 'contact_number', 'alternative_number', 'physical_address', 'learner_province', 'learner_race', 'learner_nationality', 'learner_home_language', 'disability', 'reg_documents', 'id_copy', 'term_four_report'];

    protected $attributes = [
        'reg_documents' => 'No',
        'id_copy' => 'No',
        'term_four_report' => 'No'
    ];

    public static function create(array $attributes = [])
    {
        $instance = new static;
        $instance->setPrimaryKeyValue(); // Set the primary key value
        $instance->fill($attributes)->save();
        return $instance;
    }

    /**
     * Set the primary key value.
     *
     * @return void
     */
    protected function setPrimaryKeyValue()
    {
        $this->{$this->getKeyName()} = $this->generatePrimaryKeyValue(); // Custom method to generate primary key value
    }

    /**
     * Generate a unique primary key value.
     *
     * @return mixed
     */
    protected function generatePrimaryKeyValue()
    {
        return Str::uuid();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function learnerAddresses()
    {
        return $this->hasMany(\App\Models\LearnerAddress::class, 'id', 'learner_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function learnerParents()
    {
        return $this->hasMany(\App\Models\LearnerParent::class, 'id', 'learner_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function learnerSubjects()
    {
        return $this->hasMany(\App\Models\LearnerSubject::class, 'id', 'learner_id');
    }
    

}
