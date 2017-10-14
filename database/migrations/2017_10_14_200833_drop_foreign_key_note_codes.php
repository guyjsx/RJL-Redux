<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropForeignKeyNoteCodes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('codes_notes', function(Blueprint $table)
        {
            $table->dropForeign('fk_code');
            $table->dropForeign('fk_note');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('codes_notes', function(Blueprint $table)
        {
            $table->foreign('code_id', 'fk_code')->references('id')->on('codes')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('note_id', 'fk_note')->references('id')->on('notes')->onUpdate('RESTRICT')->onDelete('RESTRICT');
        });
    }

}
