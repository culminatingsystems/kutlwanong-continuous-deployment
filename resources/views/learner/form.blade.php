<div class="row padding-1 p-1">
    <div class="col-md-12">
        
        <div class="form-group mb-2 mb20">
            <label for="learner_name" class="form-label">{{ __('Learner Name') }}</label>
            <input type="text" name="learner_name" class="form-control @error('learner_name') is-invalid @enderror" value="{{ old('learner_name', $learner?->learner_name) }}" id="learner_name" placeholder="Learner Name">
            {!! $errors->first('learner_name', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="learner_surname" class="form-label">{{ __('Learner Surname') }}</label>
            <input type="text" name="learner_surname" class="form-control @error('learner_surname') is-invalid @enderror" value="{{ old('learner_surname', $learner?->learner_surname) }}" id="learner_surname" placeholder="Learner Surname">
            {!! $errors->first('learner_surname', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="gender" class="form-label">{{ __('Gender') }}</label>
            <input type="text" name="gender" class="form-control @error('gender') is-invalid @enderror" value="{{ old('gender', $learner?->gender) }}" id="gender" placeholder="Gender">
            {!! $errors->first('gender', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="identity_number" class="form-label">{{ __('Identity Number') }}</label>
            <input type="text" name="identity_number" class="form-control @error('identity_number') is-invalid @enderror" value="{{ old('identity_number', $learner?->identity_number) }}" id="identity_number" placeholder="Identity Number">
            {!! $errors->first('identity_number', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="learner_id" class="form-label">{{ __('Learner Id') }}</label>
            <input type="text" name="learner_id" class="form-control @error('learner_id') is-invalid @enderror" value="{{ old('learner_id', $learner?->learner_id) }}" id="learner_id" placeholder="Learner Id">
            {!! $errors->first('learner_id', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="school_name" class="form-label">{{ __('School Name') }}</label>
            <input type="text" name="school_name" class="form-control @error('school_name') is-invalid @enderror" value="{{ old('school_name', $learner?->school_name) }}" id="school_name" placeholder="School Name">
            {!! $errors->first('school_name', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="join_date" class="form-label">{{ __('Join Date') }}</label>
            <input type="text" name="join_date" class="form-control @error('join_date') is-invalid @enderror" value="{{ old('join_date', $learner?->join_date) }}" id="join_date" placeholder="Join Date">
            {!! $errors->first('join_date', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="exit_date" class="form-label">{{ __('Exit Date') }}</label>
            <input type="text" name="exit_date" class="form-control @error('exit_date') is-invalid @enderror" value="{{ old('exit_date', $learner?->exit_date) }}" id="exit_date" placeholder="Exit Date">
            {!! $errors->first('exit_date', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="status" class="form-label">{{ __('Status') }}</label>
            <input type="text" name="status" class="form-control @error('status') is-invalid @enderror" value="{{ old('status', $learner?->status) }}" id="status" placeholder="Status">
            {!! $errors->first('status', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="replacment" class="form-label">{{ __('Replacment') }}</label>
            <input type="text" name="replacment" class="form-control @error('replacment') is-invalid @enderror" value="{{ old('replacment', $learner?->replacment) }}" id="replacment" placeholder="Replacment">
            {!! $errors->first('replacment', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="grade" class="form-label">{{ __('Grade') }}</label>
            <input type="text" name="grade" class="form-control @error('grade') is-invalid @enderror" value="{{ old('grade', $learner?->grade) }}" id="grade" placeholder="Grade">
            {!! $errors->first('grade', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="contact_number" class="form-label">{{ __('Contact Number') }}</label>
            <input type="text" name="contact_number" class="form-control @error('contact_number') is-invalid @enderror" value="{{ old('contact_number', $learner?->contact_number) }}" id="contact_number" placeholder="Contact Number">
            {!! $errors->first('contact_number', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="alternative_number" class="form-label">{{ __('Alternative Number') }}</label>
            <input type="text" name="alternative_number" class="form-control @error('alternative_number') is-invalid @enderror" value="{{ old('alternative_number', $learner?->alternative_number) }}" id="alternative_number" placeholder="Alternative Number">
            {!! $errors->first('alternative_number', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="physical_address" class="form-label">{{ __('Physical Address') }}</label>
            <input type="text" name="physical_address" class="form-control @error('physical_address') is-invalid @enderror" value="{{ old('physical_address', $learner?->physical_address) }}" id="physical_address" placeholder="Physical Address">
            {!! $errors->first('physical_address', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="learner_province" class="form-label">{{ __('Learner Province') }}</label>
            <input type="text" name="learner_province" class="form-control @error('learner_province') is-invalid @enderror" value="{{ old('learner_province', $learner?->learner_province) }}" id="learner_province" placeholder="Learner Province">
            {!! $errors->first('learner_province', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="learner_race" class="form-label">{{ __('Learner Race') }}</label>
            <input type="text" name="learner_race" class="form-control @error('learner_race') is-invalid @enderror" value="{{ old('learner_race', $learner?->learner_race) }}" id="learner_race" placeholder="Learner Race">
            {!! $errors->first('learner_race', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="learner_nationality" class="form-label">{{ __('Learner Nationality') }}</label>
            <input type="text" name="learner_nationality" class="form-control @error('learner_nationality') is-invalid @enderror" value="{{ old('learner_nationality', $learner?->learner_nationality) }}" id="learner_nationality" placeholder="Learner Nationality">
            {!! $errors->first('learner_nationality', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="learner_home_language" class="form-label">{{ __('Learner Home Language') }}</label>
            <input type="text" name="learner_home_language" class="form-control @error('learner_home_language') is-invalid @enderror" value="{{ old('learner_home_language', $learner?->learner_home_language) }}" id="learner_home_language" placeholder="Learner Home Language">
            {!! $errors->first('learner_home_language', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="disability" class="form-label">{{ __('Disability') }}</label>
            <input type="text" name="disability" class="form-control @error('disability') is-invalid @enderror" value="{{ old('disability', $learner?->disability) }}" id="disability" placeholder="Disability">
            {!! $errors->first('disability', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="reg_documents" class="form-label">{{ __('Reg Documents') }}</label>
            <input type="text" name="reg_documents" class="form-control @error('reg_documents') is-invalid @enderror" value="{{ old('reg_documents', $learner?->reg_documents) }}" id="reg_documents" placeholder="Reg Documents">
            {!! $errors->first('reg_documents', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="id_copy" class="form-label">{{ __('Id Copy') }}</label>
            <input type="text" name="id_copy" class="form-control @error('id_copy') is-invalid @enderror" value="{{ old('id_copy', $learner?->id_copy) }}" id="id_copy" placeholder="Id Copy">
            {!! $errors->first('id_copy', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="4th_term_report" class="form-label">{{ __('4Th Term Report') }}</label>
            <input type="text" name="4th_term_report" class="form-control @error('4th_term_report') is-invalid @enderror" value="{{ old('4th_term_report', $learner?->4th_term_report) }}" id="4th_term_report" placeholder="4Th Term Report">
            {!! $errors->first('4th_term_report', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>

    </div>
    <div class="col-md-12 mt20 mt-2">
        <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
    </div>
</div>