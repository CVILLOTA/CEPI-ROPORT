<?php
  $ruta = "http://localhost/CEPI_REPORT2/";
?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="<?php echo $ruta; ?>css/materialize.min.css">
    <!--Let browser know website is optimized for mobile-->
    <link type="text/css" rel="stylesheet" href="<?php echo $ruta; ?>css/style.css"  media="screen,projection"/>
    <link rel="stylesheet" href="<?php echo $ruta; ?>css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <?php
      if ($pagina=="snapshot") {
        include("styles-infographic.php");
      }
    ?>
  </head>
