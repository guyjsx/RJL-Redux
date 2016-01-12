<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVolunteersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('volunteers', function(Blueprint $table)
		{
			$table->integer('volunteerID', true);
			$table->string('backgroundCheckStatus', 30)->nullable();
			$table->string('firstName', 30)->nullable();
			$table->string('lastName', 30)->nullable();
			$table->date('dateOfBirth')->nullable();
			$table->string('gender', 15)->nullable()->index('gender');
			$table->string('zipCode', 5)->nullable();
			$table->string('streetAddress', 50)->nullable();
			$table->string('city', 30)->nullable();
			$table->string('state', 30)->nullable()->index('state');
			$table->string('email', 50)->nullable();
			$table->string('phoneOne', 15)->nullable();
			$table->string('phoneOneType', 30)->nullable();
			$table->string('phoneTwo', 15)->nullable();
			$table->string('phoneTwoType', 30)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('volunteers');
	}

}
