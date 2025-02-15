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
        Schema::create('learner_subjects', function (Blueprint $table) {
            //$table->id();
            $table->string('learner_id');
            //$table->index('learner_id');
            $table->bigInteger('subject_id');
            $table->string('subject_name');
            $table->foreign('learner_id')->references('id')->on('learners')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learner_subjects');
    }
};
