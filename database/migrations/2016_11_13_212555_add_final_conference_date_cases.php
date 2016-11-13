<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFinalConferenceDateCases extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rj_cases', function (Blueprint $table) {
            $table->date('finalConferenceDate')->nullable();
            $table->dropColumn(array('dueDate'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rj_cases', function (Blueprint $table) {
            $table->dropColumn(array('finalConferenceData'));
            $table->string('dueDate')->nullable();
        });
    }
}
