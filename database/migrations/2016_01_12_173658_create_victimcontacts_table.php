<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVictimcontactsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('victimcontacts', function(Blueprint $table)
		{
			$table->integer('contactID');
			$table->string('victimID', 10)->index('fk_victim_victimID_victimContact');
			$table->primary(['contactID','victimID']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('victimcontacts');
	}

}
