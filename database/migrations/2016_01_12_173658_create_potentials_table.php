<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePotentialsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('potentials', function(Blueprint $table)
		{
			$table->string('seen', 10)->nullable();
			$table->string('firstName', 30)->nullable();
			$table->string('lastName', 30)->nullable();
			$table->string('email', 60)->nullable();
			$table->string('gender', 30)->nullable();
			$table->date('dateOfBirth')->nullable();
			$table->string('phone', 15)->nullable();
			$table->string('hear', 1000)->nullable();
			$table->string('skills', 1000)->nullable();
			$table->integer('id', true);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('potentials');
	}

}
