<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOffendercontactsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('offendercontacts', function(Blueprint $table)
		{
			$table->integer('contactID');
			$table->string('offenderID', 10)->index('fk_offender_offenderID_offenderContact');
			$table->primary(['contactID','offenderID']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('offendercontacts');
	}

}
