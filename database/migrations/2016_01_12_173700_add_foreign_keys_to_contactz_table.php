<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToContactzTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('contactz', function(Blueprint $table)
		{
			$table->foreign('relationshipID', 'FK_relationships_relationshipID_contacts')->references('relationshipID')->on('relationships')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('contactz', function(Blueprint $table)
		{
			$table->dropForeign('FK_relationships_relationshipID_contacts');
		});
	}

}
