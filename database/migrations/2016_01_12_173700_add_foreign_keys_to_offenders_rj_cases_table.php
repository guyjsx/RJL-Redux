<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToOffendersRjCasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('offenders_rj_cases', function(Blueprint $table)
		{
			$table->foreign('rj_case_id', 'fk_join_cases')->references('id')->on('rj_cases')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('offender_id', 'fk_join_offender')->references('id')->on('offenders')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('offenders_rj_cases', function(Blueprint $table)
		{
			$table->dropForeign('fk_join_cases');
			$table->dropForeign('fk_join_offender');
		});
	}

}
