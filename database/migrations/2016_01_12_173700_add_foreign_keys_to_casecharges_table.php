<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToCasechargesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('casecharges', function(Blueprint $table)
		{
			$table->foreign('UORchargeNumber', 'FK_UORcodes_UORchargeNumber_caseCharges')->references('UORchargeNumber')->on('uorcodes')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('casecharges', function(Blueprint $table)
		{
			$table->dropForeign('FK_UORcodes_UORchargeNumber_caseCharges');
		});
	}

}
