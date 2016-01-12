<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRjCasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('rj_cases', function(Blueprint $table)
		{
			$table->foreign('caseClose', 'fk_reasons')->references('id')->on('reasons')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('user_id', 'fk_users_rjcases_id')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('victim_id', 'fk_victim_id')->references('id')->on('victims')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('rj_cases', function(Blueprint $table)
		{
			$table->dropForeign('fk_reasons');
			$table->dropForeign('fk_users_rjcases_id');
			$table->dropForeign('fk_victim_id');
		});
	}

}
