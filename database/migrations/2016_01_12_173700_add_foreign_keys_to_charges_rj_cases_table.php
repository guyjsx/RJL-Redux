<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToChargesRjCasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('charges_rj_cases', function(Blueprint $table)
		{
			$table->foreign('rj_case_id', 'fk_bridge_rjcases')->references('id')->on('rj_cases')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('charge_id', 'fk_charges_bridge')->references('id')->on('charges')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('charges_rj_cases', function(Blueprint $table)
		{
			$table->dropForeign('fk_bridge_rjcases');
			$table->dropForeign('fk_charges_bridge');
		});
	}

}
