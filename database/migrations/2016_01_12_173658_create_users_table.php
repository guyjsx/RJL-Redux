<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('name');
			$table->string('email')->nullable();
			$table->string('username', 150);
			$table->string('username_clean', 150);
			$table->string('password', 225);
			$table->string('activationtoken', 225);
			$table->integer('last_activation_request');
			$table->integer('LostpasswordRequest')->default(0);
			$table->integer('active');
			$table->integer('sign_up_date');
			$table->integer('last_sign_in');
			$table->string('role');
			$table->rememberToken();
            $table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
