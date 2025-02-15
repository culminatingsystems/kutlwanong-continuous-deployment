<div class="row padding-1 p-1">
    <div class="col-md-12">
        
        <div class="form-group mb-2 mb20">
            <label for="center_name" class="form-label">{{ __('Center Name') }}</label>
            <input type="text" name="center_name" class="form-control @error('center_name') is-invalid @enderror" value="{{ old('center_name', $center?->center_name) }}" id="center_name" placeholder="Center Name">
            {!! $errors->first('center_name', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="center_venue" class="form-label">{{ __('Center Venue') }}</label>
            <input type="text" name="center_venue" class="form-control @error('center_venue') is-invalid @enderror" value="{{ old('center_venue', $center?->center_venue) }}" id="center_venue" placeholder="Center Venue">
            {!! $errors->first('center_venue', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="center_manager" class="form-label">{{ __('Center Manager') }}</label>
            <input type="text" name="center_manager" class="form-control @error('center_manager') is-invalid @enderror" value="{{ old('center_manager', $center?->center_manager) }}" id="center_manager" placeholder="Center Manager">
            {!! $errors->first('center_manager', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="center_province" class="form-label">{{ __('Center Province') }}</label>
            <input type="text" name="center_province" class="form-control @error('center_province') is-invalid @enderror" value="{{ old('center_province', $center?->center_province) }}" id="center_province" placeholder="Center Province">
            {!! $errors->first('center_province', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="school_physical_address" class="form-label">{{ __('School Physical Address') }}</label>
            <input type="text" name="school_physical_address" class="form-control @error('school_physical_address') is-invalid @enderror" value="{{ old('school_physical_address', $center?->school_physical_address) }}" id="school_physical_address" placeholder="School Physical Address">
            {!! $errors->first('school_physical_address', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="manager_contact" class="form-label">{{ __('Manager Contact') }}</label>
            <input type="text" name="manager_contact" class="form-control @error('manager_contact') is-invalid @enderror" value="{{ old('manager_contact', $center?->manager_contact) }}" id="manager_contact" placeholder="Manager Contact">
            {!! $errors->first('manager_contact', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="school_contact" class="form-label">{{ __('School Contact') }}</label>
            <input type="text" name="school_contact" class="form-control @error('school_contact') is-invalid @enderror" value="{{ old('school_contact', $center?->school_contact) }}" id="school_contact" placeholder="School Contact">
            {!! $errors->first('school_contact', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="kutlwanong_email" class="form-label">{{ __('Kutlwanong Email') }}</label>
            <input type="text" name="kutlwanong_email" class="form-control @error('kutlwanong_email') is-invalid @enderror" value="{{ old('kutlwanong_email', $center?->kutlwanong_email) }}" id="kutlwanong_email" placeholder="Kutlwanong Email">
            {!! $errors->first('kutlwanong_email', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="total_learners" class="form-label">{{ __('Total Learners') }}</label>
            <input type="text" name="total_learners" class="form-control @error('total_learners') is-invalid @enderror" value="{{ old('total_learners', $center?->total_learners) }}" id="total_learners" placeholder="Total Learners">
            {!! $errors->first('total_learners', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="allocation" class="form-label">{{ __('Allocation') }}</label>
            <input type="text" name="allocation" class="form-control @error('allocation') is-invalid @enderror" value="{{ old('allocation', $center?->allocation) }}" id="allocation" placeholder="Allocation">
            {!! $errors->first('allocation', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>

    </div>
    <div class="col-md-12 mt20 mt-2">
        <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
    </div>
</div>