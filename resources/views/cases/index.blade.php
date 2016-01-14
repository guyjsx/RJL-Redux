<div class="container spark-screen">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
				<div class="panel-heading">Panel heading</div>
				<table class="table">
					<thead></thead>
					<tbody>
						@foreach($cases as $case)
							<tr>
								<td>{{ $case->caseId }}</td>
							</tr>
						@endforeach
					</tbody>	
				</table>
			</div>
        </div>
    </div>
</div>