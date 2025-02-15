<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CenterRequest extends FormRequest
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
			'center_name' => 'required|string',
			'center_venue' => 'required|string',
			'center_manager' => 'required|string',
			'center_province' => 'required|string',
			'school_physical_address' => 'required|string',
			'manager_contact' => 'required|string',
			'school_contact' => 'required|string',
			'kutlwanong_email' => 'required|string',
			'total_learners' => 'required|integer',
			'allocation' => 'required|integer',
            'status' => 'required|string'
        ];
    }
}
