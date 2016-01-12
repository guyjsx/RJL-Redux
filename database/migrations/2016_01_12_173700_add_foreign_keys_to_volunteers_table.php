<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToVolunteersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('volunteers', function(Blueprint $table)
		{
			$table->foreign('state', 'volunteers_ibfk_1')->references('state_code')->on('states')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('volunteers', function(Blueprint $table)
		{
			$table->dropForeign('volunteers_ibfk_1');
		});
	}

}
