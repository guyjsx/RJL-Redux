<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCaseattachmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('caseattachments', function(Blueprint $table)
		{
			$table->integer('caseAttachmentID', true);
			$table->string('caseAttachmentTypeName', 30)->nullable()->index('caseAttachmentTypeID');
			$table->text('fileAttachment', 65535)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('caseattachments');
	}

}
