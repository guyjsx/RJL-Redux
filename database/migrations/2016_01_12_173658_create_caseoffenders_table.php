<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCaseoffendersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('caseoffenders', function(Blueprint $table)
		{
			$table->string('caseID', 10);
			$table->string('offenderID', 10)->index('fk_offender_offenderID_caseOffender');
			$table->primary(['caseID','offenderID']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('caseoffenders');
	}

}
