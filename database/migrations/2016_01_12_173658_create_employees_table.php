<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEmployeesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('employees', function(Blueprint $table)
		{
			$table->string('employeeID', 10)->primary();
			$table->integer('accessRoleID')->index('accessRoleID_2');
			$table->string('jobTitle', 50)->nullable();
			$table->string('emailAddess', 50)->nullable();
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
			$table->index(['accessRoleID','zipCode'], 'accessRoleID');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('employees');
	}

}
