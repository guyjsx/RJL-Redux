<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewCasesFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rj_cases', function (Blueprint $table) {
            $table->string('study')->nullable();
            $table->string('referralSource')->nullable();
            $table->date('preConferenceDate')->nullable();
            $table->date('conferenceDate')->nullable();
            $table->date('agreementEndDate')->nullable();
        });

        Schema::table('offenders', function (Blueprint $table) {
            $table->string('phoneFourType')->nullable();
            $table->string('phoneFour')->nullable();
            $table->string('phoneFiveType')->nullable();
            $table->string('phoneFive')->nullable();
            $table->string('phoneSixType')->nullable();
            $table->string('phoneSix')->nullable();

            $table->string('guardianThreeFirstName')->nullable();
            $table->string('guardianThreeLastName')->nullable();
            $table->string('guardianThreeRelation')->nullable();
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
            $table->dropColumn(array(
                'study',
                'referralSource',
                'preConferenceDate',
                'conferenceDate',
                'agreementEndDate'
            ));
        });

        Schema::table('offenders', function (Blueprint $table) {
            $table->dropColumn(array(
                'phoneFourType',
                'PhoneFour',
                'phoneFiveType',
                'PhoneFive',
                'phoneSixType',
                'PhoneSix',
                'guardianThreeFirstName',
                'guardianThreeLastName',
                'guardianThreeRelation'
            ));
        });
    }
}
