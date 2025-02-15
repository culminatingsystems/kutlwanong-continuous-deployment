<?php

namespace App\Http\Controllers;

use App\Models\Learner;
use App\Models\Center;
use App\Http\Requests\LearnerRequest;
use App\Http\Resources\LearnersResource;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

/**
 * Class LearnerController
 * @package App\Http\Controllers
 */
class LearnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $learners = Learner::paginate();
        $totalLearners = Learner::all()->count();
        $maleLearners = Learner::where('gender', 'Male')->count();
        $femaleLearners = Learner::where('gender', 'Female')->count();
        
        return Inertia::render('Learners/Index', [
            'learners' => LearnersResource::collection($learners), //$learners,//$request->user() instanceof MustVerifyEmail,
            'totalLearners' => $totalLearners,
            'maleLearners' => $maleLearners,
            'femaleLearners' => $femaleLearners,
            //'reinstatedLearners' => $reinstatedLearners,
            'msg' => session('success')
        ]);

        /*return view('learner.index', compact('learners'))
            ->with('i', (request()->input('page', 1) - 1) * $learners->perPage());*/

        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $learner = new Learner();
        $centers = Center::all();
        //return view('learner.create', compact('learner'));

        return Inertia::render('Learners/Create', [
            'learner' => $learner,
            'centers' => $centers
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LearnerRequest $request)
    {
        //$validatedLearner = $request->validated();
        //$learnerID = Str::uuid(); //Generate universally unique id for learner on the system
        //$validatedLearner['id'] = $learnerID;
        Learner::create($request->validated());
        //$learner = $request->all();
        //print_r($inputData);
        //die;
        
        /*Learner::create([
            'id' => Str::uuid(),
            'learner_name' =>  $learner['learner_name'],
            'learner_surname' =>  $learner['learner_surname'],
            'gender' =>  $learner['gender'],
            'identity_number' =>  $learner['identity_number'],
            //learner_id: isEmpty(learner) ? '' : learner.gender,
            'school_name' =>  $learner['school_name'],
            'join_date' =>  $learner['join_date'],
            //'exit_date': isEmpty(learner) ? '' : learner.exit_date,
            'status' => $learner['status'],
            'replacement'=>  $learner['replacement'],
            'grade' =>  $learner['grade'],
            'contact_number' =>  $learner['contact_number'],
            'alternative_number' =>  $learner['alternative_number'],
            'physical_address' =>  $learner['physical_address'],
            'learner_province' =>  $learner['learner_province'],
            'learner_race' =>  $learner['learner_race'],
            'learner_nationality' =>  $learner['learner_nationality'],
            'learner_home_language' => $learner['learner_home_language'],
            'disability' =>  "No",//$learner['disability'],
            'reg_documents' => "No",//$learner['reg_documents'],
            'id_copy' => "No", //$learner['id_copy'],
            'term_four_report' =>  "No"//$learner['term_four_report']
        ]);*/

        return redirect()->route('learners.upload', ['id' => $learnerID])
            ->with('success', 'Learner created successfully.');
        //return Redirect::route('learners.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $learner = Learner::find($id);

        return Inertia::render('Learners/View', [
            'learner' => $learner
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $learner = Learner::find($id);

        //return view('learner.edit', compact('learner'));
        return Inertia::render('Learners/Edit', [
            'learner' => $learner
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LearnerRequest $request, Learner $learner)
    {
        $learner->update($request->validated());

        return redirect()->route('learners.index')
            ->with('success', 'Learner updated successfully');
    }

    public function destroy($id)
    {
        Learner::find($id)->delete();

        return redirect()->route('learners.index')
            ->with('success', 'Learner deleted successfully');
    }

    public function upload($id){
        $learner = Learner::find($id);

        /*if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = $file->getClientOriginalName();
            $file->storeAs('uploads', $filename); // Store the file in the 'uploads' directory
            return response()->json(['success' => true]);
        }*/
        return Inertia::render('Learners/UploadDocs', [
            'id' => $learner->id
        ]);
    }

    public function storeDocuments(Request $request){
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            
            // Define the directory where you want to store the uploaded files
            $directory = 'uploads';

            // Store the file to the specified directory
            $path = $file->store($directory);

            // Optionally, you can also specify a disk and a filename
            // $path = $file->storeAs($directory, 'filename.jpg', 'public');

            // You can then use the $path to retrieve the stored file later
            return response()->json(['message' => 'File uploaded successfully.', 'path' => $path]);
        } else {
            return response()->json(['error' => 'No file uploaded.'], 400);
        }
    }
}
