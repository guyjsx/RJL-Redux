<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDonorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('donors', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('emailAddress', 50)->nullable();
			$table->string('organizationName', 60)->nullable();
			$table->string('jobTitle', 60)->nullable();
			$table->string('firstName', 30)->nullable();
			$table->string('lastName', 30)->nullable();
			$table->date('dateOfBirth')->nullable();
			$table->string('gender', 10)->nullable();
			$table->string('streetAddress', 50)->nullable();
			$table->string('zipCode', 5)->nullable()->index('zipCode');
			$table->string('city', 30)->nullable();
			$table->string('state', 30)->nullable();
			$table->string('phoneOne', 12)->nullable();
			$table->string('phoneOneType', 30)->nullable();
			$table->string('phoneTwo', 12)->nullable();
			$table->string('phoneTwoType', 30)->nullable();
			$table->integer('donorAmount')->nullable();
			$table->string('donorType', 30)->nullable();
			$table->text('donorNotes', 65535)->nullable();
			$table->date('dateOfDonation')->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('donors');
	}

}
