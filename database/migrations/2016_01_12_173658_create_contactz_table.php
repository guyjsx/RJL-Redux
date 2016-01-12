<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContactzTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('contactz', function(Blueprint $table)
		{
			$table->integer('contactID', true);
			$table->integer('relationshipID')->nullable()->index('relationshipID');
			$table->string('firstName', 30)->nullable();
			$table->string('lastName', 30)->nullable();
			$table->date('dateofBirth')->nullable();
			$table->string('gender', 10)->nullable();
			$table->string('streetAddress', 50)->nullable();
			$table->string('zipCode', 5)->nullable()->index('zipCode');
			$table->string('state', 30)->nullable();
			$table->string('city', 30)->nullable();
			$table->string('phoneOne', 12)->nullable();
			$table->string('phoneOneType', 30)->nullable();
			$table->string('phoneTwo', 12)->nullable();
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
		Schema::drop('contactz');
	}

}
