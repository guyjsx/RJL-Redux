<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOffendersRjCasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('offenders_rj_cases', function(Blueprint $table)
		{
			$table->integer('rj_case_id')->index('rj_case_id');
			$table->integer('offender_id')->index('offender_id');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('offenders_rj_cases');
	}

}
