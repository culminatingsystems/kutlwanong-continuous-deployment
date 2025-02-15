<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Center;
use App\Http\Requests\CenterRequest;
use App\Http\Resources\CentersResource;
use Illuminate\Support\Facades\Validator;
use League\Csv\Reader;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

/**
 * Class CenterController
 * @package App\Http\Controllers
 */
class CenterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $centers = Center::paginate();
        $allocationTotal = Center::sum('allocation');
        $overflowTotal = Center::sum('overflow');
        $totalCenters = Center::count();
        //print_r(CentersResource::collection($centers));
        //die;

        return Inertia::render('Admin/Centers/Index', [
            'centers' => CentersResource::collection($centers),
            'allocationTotal' => $allocationTotal,
            'overflowTotal' => $overflowTotal,
            'totalCenters' => $totalCenters,
            'msg' => session('success')
        ]);

        /*return view('center.index', compact('centers'))
            ->with('i', (request()->input('page', 1) - 1) * $centers->perPage());*/
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $center = new Center();

        return Inertia::render('Admin/Centers/Create', [
            'center' => $center
        ]);
        //return view('center.create', compact('center'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CenterRequest $request)
    {
        Center::create($request->validated());

        return redirect()->route('centers.index')
            ->with('success', 'Center created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $center = Center::find($id);

        return Inertia::render('Admin/Centers/View', [
            'center' => $center
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $center = Center::find($id);

        return Inertia::render('Admin/Centers/Edit', [
            'center' => $center
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CenterRequest $request, Center $center)
    {
        $center->update($request->validated());

        return redirect()->route('centers.index')
            ->with('success', 'Center updated successfully');
    }

    public function import(Request $request){

        $validator = Validator::make($request->all(), [
            'centres_csv' => 'required|file|mimes:csv,txt|max:2048',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $path = $request->file('centres_csv')->getRealPath();
        $csv = Reader::createFromPath($path, 'r');
        $csv->setHeaderOffset(0); // Assuming the first row is the header

        $records = $csv->getRecords();
        $count = 1;
        foreach ($records as $index => $record) {
            $count++;
            // Process each record
            // Example: Validate each row data
            $rowValidator = Validator::make($record, [
                'center_province' => 'required|string',
                'school_physical_address' => 'required|string',
                'center_venue' => 'required|string',
                'center_manager' => 'required|string',
                'manager_contact' => 'required|string',
                'school_contact' => 'required|string',
                'kutlwanong_email' => 'required|email'
            ]);

            if ($rowValidator->fails()) {
                // Handle row validation failure
                // You can collect errors and show them later or skip invalid rows
                //continue;
                Log::channel('console')->info('This is an info message');
                $rowErrors[$index + 1] = $rowValidator->errors()->all();
            }else{
                $record['center_name'] = $record['center_venue'];
                Log::channel('console')->info($record);
                Center::create($record);
            }
        }

        //return redirect()->back()->with('success', 'CSV file uploaded and processed successfully.');
        return response()->json(['message' => 'File uploaded successfully.', 'path' => $path]);
    }

    public function destroy($id)
    {
        Center::find($id)->delete();

        return redirect()->route('centers.index')
            ->with('success', 'Center deleted successfully');
    }
}
