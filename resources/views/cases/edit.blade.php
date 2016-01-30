<form role="form" submit.delegate="confirm()">
    {{ csrf_field() }}
    <div class="row">
        <div class="col-sm-3">
            <label for="caseId">Case Id: </label>
            <span class="inputField"><input type="text" id="caseId" value.bind="data['caseId']" readonly></span>
        </div>
        <div class="col-sm-3">
            <label for="caseId">Case Status: </label>
            <span class="inputField"><input type="text" id="caseId" value.bind="data['caseStatus']" readonly></span>
        </div>
    </div>
</form>
