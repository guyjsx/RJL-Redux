<div class="">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <table id="victimsTable" class="table">
                    <thead>
                    <tr>
                        <th>Victim ID</th>
                        <th>Case ID</th>
                        <th>Victim First Name</th>
                        <th>Victim Last Name</th>
                        <th>Age</th>
                        <th>Primary Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($victims as $victim)
                        <tr>
                            <td>
                                @if( !empty($victim['victimId']))
                                    {{ $victim['victimId'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($victim['rj_cases'][0]['caseId']))
                                    {{ $victim['rj_cases'][0]['caseId'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($victim['firstName']))
                                    {{ $victim['firstName'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($victim['lastName']))
                                    {{ $victim['lastName'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($victim['age']))
                                    {{ $victim['age'] }}
                                @endif
                            </td>
                            <td>
                                @if( !empty($victim['phoneOne']))
                                    {{ $victim['phoneOne'] }}
                                @endif
                            </td>
                            <td>
                                <a href="/#/victim/edit/?id=@if( !empty($victim['id'])){{ $victim['id'] }}@endif">View</a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>