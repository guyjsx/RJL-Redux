<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToVolunteeractivitiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('volunteeractivities', function(Blueprint $table)
		{
			$table->foreign('activityID', 'FK_activities_activityID_volunteerActivities')->references('activityID')->on('activities')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('volunteerID', 'FK_volunteers_volunteerID_volunteerActivities')->references('volunteerID')->on('volunteers')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('volunteeractivities', function(Blueprint $table)
		{
			$table->dropForeign('FK_activities_activityID_volunteerActivities');
			$table->dropForeign('FK_volunteers_volunteerID_volunteerActivities');
		});
	}

}
