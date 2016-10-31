<div class="">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <table id="offendersTable" class="table">
                    <thead>
                    <tr>
                        <th>Offender ID</th>
                        <th>Case ID</th>
                        <th>Offender First Name</th>
                        <th>Offender Last Name</th>
                        <th>Primary Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($offenders as $offender)
                        <tr>
                            <td>
                                @if( !empty($offender['offenderId']))
                                    {{ $offender['offenderId'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($offender['rj_cases'][0]['caseId']))
                                {{ $offender['rj_cases'][0]['caseId'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($offender['firstName']))
                                    {{ $offender['firstName'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($offender['lastName']))
                                    {{ $offender['lastName'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($offender['phoneOne']))
                                    {{ $offender['phoneOne'] }}
                                @endif
                            </td>
                            <td>
                                <a class="btn btn-default btn-info table-btn" href="/#/offender/edit/?id=@if( !empty($offender['id'])){{ $offender['id'] }}@endif">View</a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>