<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserNamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_names', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('profile_id');
            $table->string('firstname_uz');
            $table->string('firstname_uz2')->nullable();
            $table->string('firstname_ru')->nullable();
            $table->string('lastname_uz')->nullable();
            $table->string('lastname_uz2')->nullable();
            $table->string('lastname_ru')->nullable();
            $table->string('surname_uz')->nullable();
            $table->string('surname_uz2')->nullable();
            $table->string('surname_ru')->nullable();
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
        Schema::dropIfExists('user_names');
    }
}
