<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCasevictimsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('casevictims', function(Blueprint $table)
		{
			$table->string('caseID', 10);
			$table->string('victimID', 10)->index('fk_victim_victimID_caseVictim');
			$table->primary(['caseID','victimID']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('casevictims');
	}

}
