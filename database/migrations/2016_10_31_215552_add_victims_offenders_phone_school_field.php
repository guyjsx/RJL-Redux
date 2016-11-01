<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddVictimsOffendersPhoneSchoolField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('victims', function (Blueprint $table) {
            $table->string('phoneThree')->nullable();
            $table->string('phoneThreeType')->nullable();
        });

        Schema::table('offenders', function (Blueprint $table) {
            $table->string('phoneThree')->nullable();
            $table->string('phoneThreeType')->nullable();
            $table->string('school')->nullable();
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
            $table->dropColumn(array('phoneThree', 'phoneThreeType'));
        });

        Schema::table('offenders', function (Blueprint $table) {
            $table->dropColumn(array('phoneThree', 'phoneThreeType'));
        });
    }
}
