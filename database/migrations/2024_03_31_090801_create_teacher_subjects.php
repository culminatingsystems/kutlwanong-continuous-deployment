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
        Schema::create('teacher_subjects', function (Blueprint $table) {
            //$table->id();
            $table->string('teacher_id');
            //$table->string('teacher_id');
            //$table->index('teacher_id');
            $table->bigInteger('subject_id');
            $table->string('subject_name');
            //$table->foreign('teacher_id')->references('id')->on('teachers')->onDelete('cascade'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacher_subjects');
    }
};
