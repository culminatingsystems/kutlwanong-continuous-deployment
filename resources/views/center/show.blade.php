@extends('layouts.app')

@section('template_title')
    {{ $center->name ?? __('Show') . " " . __('Center') }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Center</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary btn-sm" href="{{ route('centers.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body bg-white">
                        
                        <div class="form-group mb-2 mb20">
                            <strong>Center Name:</strong>
                            {{ $center->center_name }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Center Venue:</strong>
                            {{ $center->center_venue }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Center Manager:</strong>
                            {{ $center->center_manager }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Center Province:</strong>
                            {{ $center->center_province }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>School Physical Address:</strong>
                            {{ $center->school_physical_address }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Manager Contact:</strong>
                            {{ $center->manager_contact }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>School Contact:</strong>
                            {{ $center->school_contact }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Kutlwanong Email:</strong>
                            {{ $center->kutlwanong_email }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Total Learners:</strong>
                            {{ $center->total_learners }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Allocation:</strong>
                            {{ $center->allocation }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
