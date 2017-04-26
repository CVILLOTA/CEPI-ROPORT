<?php $pagina = "index"; ?>
<?php $pagina = "sustainability"; ?>
<?php include("../components/header.php"); ?>

  <body id="body-sustainability">
    <!--Slidebar menu-->
      <?php include("../components/menu.php"); ?>
    <!-- End Menu -->
    <!--barra navegación menu-->
      <?php include("../components/navegation.php"); ?>
    <!-- End barra navegación -->

<!--
  **Contenido
-->
<br>
<div class="container">
  <div class="row">
    <div class="col s12 m5 l5 titulo-sustainability">
      <h4>OUR VISION AND THE 2050 ROADMAP TO A LOW-CARBON BIO-ECONOMY</h4>
      <p>At CEPI we know that the future is made up of the decisions we take today. <B>The 2050 Roadmap </B>traces the path to guide those decisions and constitute our sustainability vision.</p>
    </div>
    <div class="col s12 m7 l7 video-sustainability valign-wrapper">
      <img src="<?php echo $ruta; ?>img/video.png" alt="">
    </div>
  </div>
</div>
<!--
** Inicio Botón FAB
-->
<?php include("../components/button-FAB.php"); ?>
    <?php include("../components/scripts.php"); ?>
  </body>
</html>
