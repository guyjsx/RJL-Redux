<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOffendersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('offenders', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('offenderId', 30)->nullable();
			$table->integer('case_id')->nullable()->index('case_id');
			$table->string('firstName', 30)->nullable();
			$table->string('lastName', 30)->nullable();
			$table->string('socialSecurityNumber', 11)->nullable();
			$table->date('dateOfBirth')->nullable();
			$table->string('gender', 10)->nullable()->index('gender');
			$table->string('race', 60)->nullable()->index('raceID');
			$table->string('streetAddress', 50)->nullable();
			$table->string('zipCode', 5)->nullable()->index('zipCode_2');
			$table->string('city', 30)->nullable();
			$table->string('state', 30)->nullable();
			$table->string('email', 50);
			$table->string('guardianOneFirstName', 30)->nullable();
			$table->string('guardianOneLastName', 30)->nullable();
			$table->string('guardianOneRelation', 30)->nullable();
			$table->string('phoneOneType', 30)->nullable();
			$table->string('phoneOne', 15)->nullable();
			$table->string('guardianTwoFirstName', 30)->nullable();
			$table->string('guardianTwoLastName', 30)->nullable();
			$table->string('guardianTwoRelation', 30)->nullable();
			$table->string('phoneTwoType', 12)->nullable();
			$table->string('phoneTwo', 15)->nullable();
			$table->integer('commhours')->nullable();
			$table->index(['zipCode','race'], 'zipCode');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('offenders');
	}

}
