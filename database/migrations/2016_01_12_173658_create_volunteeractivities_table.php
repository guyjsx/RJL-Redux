<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVolunteeractivitiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('volunteerActivities', function(Blueprint $table)
		{
			$table->integer('volunteerID');
			$table->integer('activityID')->index('FK_activityID');
			$table->primary(['volunteerID','activityID']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('volunteerActivities');
	}

}
