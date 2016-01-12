<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDonationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('donations', function(Blueprint $table)
		{
			$table->string('donationID', 10);
			$table->integer('donorID')->index('fk_donor_donation');
			$table->string('donationTypeID', 10)->nullable();
			$table->integer('eventID')->nullable()->index('eventID');
			$table->decimal('donationAmount')->nullable();
			$table->date('donationDate')->nullable();
			$table->primary(['donationID','donorID']);
			$table->index(['donationTypeID','eventID'], 'donationTypeID');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('donations');
	}

}
