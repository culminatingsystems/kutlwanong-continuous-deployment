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
        //
        Schema::table('center', function(Blueprint $table){
            $table->string('manager_contact', 13);
            $table->text('physical_address');
            $table->string('host_school');
            $table->string('school_contact', 13);
            $table->string('funding_partners');
            $table->string('province');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
