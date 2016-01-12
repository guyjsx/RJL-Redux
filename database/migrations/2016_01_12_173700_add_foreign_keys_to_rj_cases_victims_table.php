<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToRjCasesVictimsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('rj_cases_victims', function(Blueprint $table)
		{
			$table->foreign('rj_case_id', 'fk_join_rjcases')->references('id')->on('rj_cases')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('victim_id', 'fk_join_victims')->references('id')->on('victims')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('rj_cases_victims', function(Blueprint $table)
		{
			$table->dropForeign('fk_join_rjcases');
			$table->dropForeign('fk_join_victims');
		});
	}

}
