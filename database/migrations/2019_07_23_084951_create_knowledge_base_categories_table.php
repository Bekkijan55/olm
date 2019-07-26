<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKnowledgeBaseCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('knowledge_base_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('child_id')->nullable();            
            $table->string('photo')->nullable();
            $table->string('title_ru');
            $table->string('title_uz');
            $table->string('title_uz2');
            $table->text('desc_ru')->nullable();
            $table->text('desc_uz')->nullable();
            $table->text('desc_uz2')->nullable();
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
        Schema::dropIfExists('knowledge_base_categories');
    }
}
