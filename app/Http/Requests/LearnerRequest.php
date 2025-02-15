<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LearnerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
			'learner_name' => 'required|string',
			'learner_surname' => 'required|string',
			'gender' => 'required',
			'identity_number' => 'required|string',
			//'learner_id' => 'required|string',
			'school_name' => 'required|string',
			'join_date' => 'required|date',
			//'exit_date' => 'required',
			'status' => 'required|string',
			'replacement' => 'required|string',
			'grade' => 'required|string',
			'contact_number' => 'required|string',
			'alternative_number' => 'required|string',
			'physical_address' => 'required|string',
			'learner_province' => 'required|string',
			'learner_race' => 'required|string',
			'learner_nationality' => 'required|string',
			'learner_home_language' => 'required|string',
			'disability' => 'required',
			//'reg_documents' => 'required',
			//'id_copy' => 'required',
			//'4th_term_report' => 'required',
        ];
		//return [];
    }
}
