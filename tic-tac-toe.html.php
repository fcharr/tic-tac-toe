<!DOCTYPE html>

<?
if(!isset($interface))
{
    $interface = 0;
}
?>

<html>
<head>
<title>tic-tac-toe</title>

<script language="javascript" type="text/javascript" src="tic-tac-toe.js"></script>
<script language="javascript" type="text/javascript" src="artificial-intelligence.js"></script>
<script language="javascript" type="text/javascript" src="interface-<?= $interface ?>.js"></script>

<style>
<? include('tic-tac-toe-' . $interface . '.css'); ?>
</style>

</head>

<body onload="start();">
<? include('tic-tac-toe-' . $interface . '.inc.html'); ?>
</body>
</html>