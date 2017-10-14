<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropForeignKeyNotes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('notes', function(Blueprint $table)
        {
            $table->dropForeign('fk_rj_case');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notes', function(Blueprint $table)
        {
            $table->foreign('rj_case_id', 'fk_rj_case')->references('id')->on('rj_cases')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }
}
