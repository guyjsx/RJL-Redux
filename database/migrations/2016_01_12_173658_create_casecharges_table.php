<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCasechargesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('caseCharges', function(Blueprint $table)
		{
			$table->string('caseID', 10);
			$table->string('UORchargeNumber', 10)->index('fk_UORcode_UORchargeNumber_caseCharge');
			$table->text('chargeDescription', 65535)->nullable();
			$table->date('chargeDate')->nullable();
			$table->primary(['caseID','UORchargeNumber']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('caseCharges');
	}

}
