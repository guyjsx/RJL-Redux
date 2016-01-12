<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCitiesExtendedTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cities_extended', function(Blueprint $table)
		{
			$table->string('city', 50);
			$table->char('state_code', 2);
			$table->integer('zip')->unsigned();
			$table->float('latitude', 10, 0);
			$table->float('longitude', 10, 0);
			$table->string('county', 50);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('cities_extended');
	}

}
