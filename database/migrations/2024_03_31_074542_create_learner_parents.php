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
        Schema::create('learner_parents', function (Blueprint $table) {
            $table->id();
            $table->string('learner_id');
            //$table->index('learner_id');
            $table->foreign('learner_id')->references('id')->on('learners')->onDelete('cascade');
            $table->string('parent_name');
            $table->string('parent_surname');
            $table->string('relationship');
            $table->string('parent_contacts');
            $table->enum('employed', ['Yes', 'No']);
            $table->string('place_of_employment');
            $table->string('work_contact');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learner_guardians');
    }
};
