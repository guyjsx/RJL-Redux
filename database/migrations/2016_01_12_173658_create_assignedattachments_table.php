<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAssignedattachmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('assignedattachments', function(Blueprint $table)
		{
			$table->string('assignedAttachmentID', 10)->primary();
			$table->integer('caseAttachmentID')->nullable();
			$table->string('caseID', 10)->nullable()->index('caseID');
			$table->index(['caseAttachmentID','caseID'], 'caseAttachmentID');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('assignedattachments');
	}

}
