@extends('layouts.app')

@section('template_title')
    {{ $learner->name ?? __('Show') . " " . __('Learner') }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Learner</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary btn-sm" href="{{ route('learners.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body bg-white">
                        
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Name:</strong>
                            {{ $learner->learner_name }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Surname:</strong>
                            {{ $learner->learner_surname }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Gender:</strong>
                            {{ $learner->gender }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Identity Number:</strong>
                            {{ $learner->identity_number }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Id:</strong>
                            {{ $learner->learner_id }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>School Name:</strong>
                            {{ $learner->school_name }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Join Date:</strong>
                            {{ $learner->join_date }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Exit Date:</strong>
                            {{ $learner->exit_date }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Status:</strong>
                            {{ $learner->status }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Replacment:</strong>
                            {{ $learner->replacment }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Grade:</strong>
                            {{ $learner->grade }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Contact Number:</strong>
                            {{ $learner->contact_number }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Alternative Number:</strong>
                            {{ $learner->alternative_number }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Physical Address:</strong>
                            {{ $learner->physical_address }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Province:</strong>
                            {{ $learner->learner_province }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Race:</strong>
                            {{ $learner->learner_race }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Nationality:</strong>
                            {{ $learner->learner_nationality }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Learner Home Language:</strong>
                            {{ $learner->learner_home_language }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Disability:</strong>
                            {{ $learner->disability }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Reg Documents:</strong>
                            {{ $learner->reg_documents }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Id Copy:</strong>
                            {{ $learner->id_copy }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>4Th Term Report:</strong>
                            {{ $learner->4th_term_report }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
