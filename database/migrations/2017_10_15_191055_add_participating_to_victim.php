<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddParticipatingToVictim extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('victims', function (Blueprint $table) {
            $table->string('participating')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('victims', function (Blueprint $table) {
            $table->dropColumn(array('participating'));
        });
    }
}
