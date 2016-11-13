<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRjlAdduserTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('rjl_adduser', function(Blueprint $table)
		{
			$table->string('firstName', 30);
			$table->string('lastName', 30);
			$table->integer('userID')->primary();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('rjl_adduser');
	}

}
