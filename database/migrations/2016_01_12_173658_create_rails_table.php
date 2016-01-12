<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('rails', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('header', 500);
			$table->string('subHeaderOne', 500);
			$table->string('subHeaderTwo', 500);
			$table->string('subHeaderThree', 500);
			$table->string('subHeaderFour', 500);
			$table->string('subHeaderFive', 500);
			$table->string('linkOne', 500);
			$table->string('linkTwo', 500);
			$table->string('linkThree', 500);
			$table->string('linkFour', 200);
			$table->string('linkFive', 200);
			$table->string('hrefOne', 200);
			$table->string('hrefTwo', 200);
			$table->string('hrefThree', 200);
			$table->string('hrefFour', 200);
			$table->string('hrefFive', 200);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('rails');
	}

}
