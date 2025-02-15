@extends('layouts.app')

@section('template_title')
    Center
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Center') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('centers.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
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
                                        
										<th>Center Name</th>
										<th>Center Venue</th>
										<th>Center Manager</th>
										<th>Center Province</th>
										<th>School Physical Address</th>
										<th>Manager Contact</th>
										<th>School Contact</th>
										<th>Kutlwanong Email</th>
										<th>Total Learners</th>
										<th>Allocation</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($centers as $center)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $center->center_name }}</td>
											<td>{{ $center->center_venue }}</td>
											<td>{{ $center->center_manager }}</td>
											<td>{{ $center->center_province }}</td>
											<td>{{ $center->school_physical_address }}</td>
											<td>{{ $center->manager_contact }}</td>
											<td>{{ $center->school_contact }}</td>
											<td>{{ $center->kutlwanong_email }}</td>
											<td>{{ $center->total_learners }}</td>
											<td>{{ $center->allocation }}</td>

                                            <td>
                                                <form action="{{ route('centers.destroy',$center->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('centers.show',$center->id) }}"><i class="fa fa-fw fa-eye"></i> {{ __('Show') }}</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('centers.edit',$center->id) }}"><i class="fa fa-fw fa-edit"></i> {{ __('Edit') }}</a>
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
                {!! $centers->links() !!}
            </div>
        </div>
    </div>
@endsection
