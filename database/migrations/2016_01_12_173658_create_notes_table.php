<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('notes', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('filemime', 50)->nullable();
			$table->integer('filesize')->nullable();
			$table->string('filename', 30)->nullable();
			$table->text('noteContent', 65535)->nullable();
			$table->integer('rj_case_id')->nullable()->index('rj_case_id');
			$table->date('noteDate');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('notes');
	}

}
