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
        Schema::create('learner_addresses', function (Blueprint $table) {
            $table->id();
            $table->string('learner_id');
            /*$table->string('learner_id');*/
            $table->foreign('learner_id')->references('id')->on('learners')->onDelete('cascade');
            $table->string('street');
            $table->string('suburb');
            $table->string('city');
            $table->string('province');
            $table->string('zipcode');
            $table->string('country');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learner_addresses');
    }
};
