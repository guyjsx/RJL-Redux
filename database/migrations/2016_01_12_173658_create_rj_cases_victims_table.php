<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRjCasesVictimsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('rj_cases_victims', function(Blueprint $table)
		{
			$table->integer('rj_case_id')->nullable()->index('rj_case_id');
			$table->integer('victim_id')->nullable()->index('victim_id');
			$table->index(['rj_case_id','victim_id'], 'case_id');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('rj_cases_victims');
	}

}
