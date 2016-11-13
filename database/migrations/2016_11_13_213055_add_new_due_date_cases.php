<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewDueDateCases extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rj_cases', function (Blueprint $table) {
            $table->date('dueDate')->nullable();
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
            $table->dropColumn(array('dueDate'));
        });
    }
}
