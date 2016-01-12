<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVictimsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('victims', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('victimId', 30);
			$table->integer('case_id')->nullable()->index('case_id_2');
			$table->string('firstName', 30)->nullable();
			$table->string('lastName', 30)->nullable();
			$table->string('socialSecurityNumber', 11);
			$table->integer('age')->nullable();
			$table->date('dateOfBirth')->nullable();
			$table->string('gender', 10)->nullable();
			$table->string('race', 60)->nullable();
			$table->string('streetAddress', 50)->nullable();
			$table->string('zipCode', 5)->nullable()->index('zipCode');
			$table->string('city', 30)->nullable();
			$table->string('state', 30)->nullable()->index('state');
			$table->string('email', 50)->nullable();
			$table->string('guardianOneFirstName', 30);
			$table->string('guardianOneLastName', 30);
			$table->string('guardianOneRelation', 30);
			$table->string('phoneOneType', 30)->nullable();
			$table->string('phoneOne', 15)->nullable();
			$table->string('guardianTwoFirstName', 30);
			$table->string('guardianTwoLastName', 30);
			$table->string('guardianTwoRelation', 30);
			$table->string('phoneTwoType', 30)->nullable();
			$table->string('phoneTwo', 15)->nullable();
			$table->index(['race','zipCode'], 'raceID');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('victims');
	}

}
