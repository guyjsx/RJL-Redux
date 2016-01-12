<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRjCasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('rj_cases', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('user_id')->nullable()->index('user_id');
			$table->integer('victim_id')->nullable()->index('victim_id');
			$table->bigInteger('facilitator')->nullable()->index('facilitator');
			$table->string('caseId', 30)->nullable();
			$table->string('caseStatus', 30)->nullable();
			$table->string('casePhase', 150)->nullable();
			$table->date('dateOfReferral')->nullable();
			$table->date('courtDate')->nullable();
			$table->string('chargeNumber', 10)->nullable();
			$table->date('dateOfCharge')->nullable();
			$table->text('caseDescription', 65535)->nullable();
			$table->integer('caseClose')->nullable()->index('caseClose_id');
			$table->dateTime('dateClosed')->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('rj_cases');
	}

}
