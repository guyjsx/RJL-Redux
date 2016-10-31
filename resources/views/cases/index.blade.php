<div class="">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
				<table id="casesTable" class="table">
					<thead>
							<tr>
								<th>Case ID</th>
								<th>Case Status</th>
								<th>Offender First Name</th>
								<th>Offender Last Name</th>
								<th>Victim First Name</th>
								<th>Victim Last Name</th>
								<th>Action</th>
							</tr>
					</thead>
					<tbody>
						@foreach($cases as $case)
							<tr>
								<td>
									@if( !empty($case['caseId']))
										{{ $case['caseId'] }}
									@endif
								</td>
								<td>
									@if( !empty($case['caseStatus']))
										{{ $case['caseStatus'] }}
									@endif
								</td>
								<td>
									@if( !empty($case['offenders']))
										{{ $case['offenders'][0]['firstName'] }}
									@endif
								</td>
								<td>
									@if( !empty($case['offenders']))
										{{ $case['offenders'][0]['lastName'] }}
									@endif
								</td>
								<td>
									@if( !empty($case['victims']))
										{{ $case['victims'][0]['firstName'] }}
									@endif
								</td>
								<td>
									@if( !empty($case['victims']))
										{{ $case['victims'][0]['firstName'] }}
									@endif
								</td>
								<td>
									<a class="btn btn-default btn-info table-btn" href="/#/cases/edit/?id=@if( !empty($case['id'])){{ $case['id'] }}@endif">View</a>
								</td>
							</tr>
						@endforeach
					</tbody>	
				</table>
			</div>
        </div>
    </div>
</div>