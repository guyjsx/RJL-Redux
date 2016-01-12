<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToAssignedattachmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('assignedattachments', function(Blueprint $table)
		{
			$table->foreign('caseAttachmentID', 'FK_caseAttachments_caseAttachmentID_assignedAttachments')->references('caseAttachmentID')->on('caseattachments')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('assignedattachments', function(Blueprint $table)
		{
			$table->dropForeign('FK_caseAttachments_caseAttachmentID_assignedAttachments');
		});
	}

}
