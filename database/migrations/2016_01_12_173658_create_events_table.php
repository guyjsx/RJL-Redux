<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEventsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('events', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('eventType', 50)->nullable()->index('eventTypeID');
			$table->string('eventName', 100)->nullable();
			$table->date('eventDate')->nullable();
			$table->integer('eventCost')->nullable();
			$table->integer('numOfAttendees')->nullable();
			$table->integer('numOfDonations')->nullable();
			$table->integer('totalDonations')->nullable();
			$table->integer('avgDonations')->nullable();
			$table->text('eventNotes', 65535)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('events');
	}

}
