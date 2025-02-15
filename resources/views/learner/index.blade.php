@extends('layouts.app')

@section('template_title')
    Learner
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Learner') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('learners.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success m-4">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body bg-white">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Learner Name</th>
										<th>Learner Surname</th>
										<th>Gender</th>
										<th>Identity Number</th>
										<th>Learner Id</th>
										<th>School Name</th>
										<th>Join Date</th>
										<th>Exit Date</th>
										<th>Status</th>
										<th>Replacment</th>
										<th>Grade</th>
										<th>Contact Number</th>
										<th>Alternative Number</th>
										<th>Physical Address</th>
										<th>Learner Province</th>
										<th>Learner Race</th>
										<th>Learner Nationality</th>
										<th>Learner Home Language</th>
										<th>Disability</th>
										<th>Reg Documents</th>
										<th>Id Copy</th>
										<th>4Th Term Report</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($learners as $learner)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $learner->learner_name }}</td>
											<td>{{ $learner->learner_surname }}</td>
											<td>{{ $learner->gender }}</td>
											<td>{{ $learner->identity_number }}</td>
											<td>{{ $learner->learner_id }}</td>
											<td>{{ $learner->school_name }}</td>
											<td>{{ $learner->join_date }}</td>
											<td>{{ $learner->exit_date }}</td>
											<td>{{ $learner->status }}</td>
											<td>{{ $learner->replacment }}</td>
											<td>{{ $learner->grade }}</td>
											<td>{{ $learner->contact_number }}</td>
											<td>{{ $learner->alternative_number }}</td>
											<td>{{ $learner->physical_address }}</td>
											<td>{{ $learner->learner_province }}</td>
											<td>{{ $learner->learner_race }}</td>
											<td>{{ $learner->learner_nationality }}</td>
											<td>{{ $learner->learner_home_language }}</td>
											<td>{{ $learner->disability }}</td>
											<td>{{ $learner->reg_documents }}</td>
											<td>{{ $learner->id_copy }}</td>
											<td>{{ $learner->4th_term_report }}</td>

                                            <td>
                                                <form action="{{ route('learners.destroy',$learner->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('learners.show',$learner->id) }}"><i class="fa fa-fw fa-eye"></i> {{ __('Show') }}</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('learners.edit',$learner->id) }}"><i class="fa fa-fw fa-edit"></i> {{ __('Edit') }}</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> {{ __('Delete') }}</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $learners->links() !!}
            </div>
        </div>
    </div>
@endsection
