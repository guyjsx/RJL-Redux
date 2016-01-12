<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateChargesRjCasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('charges_rj_cases', function(Blueprint $table)
		{
			$table->integer('rj_case_id');
			$table->integer('charge_id')->index('charge_id_2');
			$table->index(['rj_case_id','charge_id'], 'case_id');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('charges_rj_cases');
	}

}
