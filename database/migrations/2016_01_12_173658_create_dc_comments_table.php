<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDcCommentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('dc_comments', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('transaction_id', 64)->default('')->unique('transaction_id');
			$table->string('name', 128)->default('');
			$table->string('url')->default('');
			$table->text('message', 65535);
			$table->timestamp('dt')->default(DB::raw('CURRENT_TIMESTAMP'));
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('dc_comments');
	}

}
