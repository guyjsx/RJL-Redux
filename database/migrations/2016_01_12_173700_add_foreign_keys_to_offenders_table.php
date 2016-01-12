<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToOffendersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('offenders', function(Blueprint $table)
		{
			$table->foreign('case_id', 'fk_rjcases_offenders')->references('id')->on('rj_cases')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('offenders', function(Blueprint $table)
		{
			$table->dropForeign('fk_rjcases_offenders');
		});
	}

}
