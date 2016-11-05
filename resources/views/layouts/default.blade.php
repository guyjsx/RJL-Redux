<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

    <!-- Styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }
    </style>
    <base href="/"></base>
    <script>var userObj = {!! $user or 'undefined' !!}</script>
    <link href="{{ URL::asset('/public/css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ URL::asset('/aurelia/jspm_packages/github/select2/select2@4.0.1/css/select2.min.css') }}" rel="stylesheet" type="text/css">
</head>
<body id="app-layout">
    <div aurelia-app="main"></div>
    <script type="text/javascript" src="aurelia/jspm_packages/system.js"></script>
    <script type="text/javascript" src="aurelia/config.js"></script>
    <script>
        System.import('aurelia-bootstrapper');
    </script>

    <!-- JavaScripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
</body>
</html>
