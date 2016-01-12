<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToOffendercontactsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('offendercontacts', function(Blueprint $table)
		{
			$table->foreign('contactID', 'FK_contacts_contactID_offenderContacts')->references('contactID')->on('contactz')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('offendercontacts', function(Blueprint $table)
		{
			$table->dropForeign('FK_contacts_contactID_offenderContacts');
		});
	}

}
