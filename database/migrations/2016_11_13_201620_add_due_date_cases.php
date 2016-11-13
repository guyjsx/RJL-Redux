<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDueDateCases extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rj_cases', function (Blueprint $table) {
            $table->string('dueDate')->nullable();
            $table->string('caseType')->nullable();
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
            $table->dropColumn(array('dueDate', 'caseType'));
        });
    }
}
