<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('learners', function (Blueprint $table) {
            //$table->id();
            $table->uuid('id')->primary();
            $table->string('learner_name');
            $table->string('learner_surname');
            $table->enum('gender', ['Male', 'Female', 'Other']);
            $table->string('identity_number')->unique();
            $table->string('learner_id')->unique();
            $table->string('school_name');
            $table->date('join_date');
            $table->date('exit_date');
            $table->enum('status', ['Active', 'Drop Out']);
            $table->enum('replacment', ['Yes', 'No']);
            $table->integer('grade');
            $table->string('contact_number');
            $table->string('alternative_number');
            $table->text('physical_address');
            $table->string('learner_province');
            $table->string('learner_race');
            $table->string('learner_nationality');
            $table->string('learner_home_language');
            $table->enum('disability', ['Yes', 'No']);
            $table->enum('reg_documents', ['Yes', 'No']);
            $table->enum('id_copy', ['Yes', 'No']);
            $table->enum('4th_term_report', ['Yes', 'No']);
            $table->timestamps();

            /*$table->string('street');
            $table->string('suburb');
            $table->string('city');
            $table->string('province');
            $table->string('zipcode');
            $table->string('country');*/
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learners');
    }
};
