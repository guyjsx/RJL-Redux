<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBestContactToVictim extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('victims', function (Blueprint $table) {
            $table->string('bestContact')->nullable();
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
            $table->dropColumn(array('bestContact'));
        });
    }
}
