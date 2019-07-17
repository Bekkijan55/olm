<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->integer('education_id')->nullable();
            $table->integer('nation_id')->nullable();
            $table->integer('party_id')->nullable();
            $table->integer('okrug_id')->nullable();
            
            $table->string('birthplace')->nullable();
            $table->string('registered_address')->nullable();
            $table->string('actual_address')->nullable();
            $table->string('work_phone')->nullable();
            $table->string('phone')->nullable();
            $table->string('mobile_phone')->nullable();                         
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
