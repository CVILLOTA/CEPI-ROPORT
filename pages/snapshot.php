<?php $pagina = "snapshot"; ?>
<?php include("../components/header.php"); ?>

  <body id="body-snapshot">
    <!--Slidebar menu-->
      <?php include("../components/menu.php"); ?>
    <!-- End Menu -->
    <!--barra navegación menu-->
      <?php include("../components/navegation.php"); ?>
    <!-- End barra navegación -->

<!-- Contenido -->
<main class="cd-main-content">
  <!-- Banner -->
  <section class="flex banner" id="bannerSec">
    <div class="ImgFlash"></div>
    <div class="flex banner-footer no-print">
      <div class="flex angleDown">
        <a href="#seccion2"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
      </div>
    </div>
  </section>
  <!-- /Banner -->
  <!-- Seccion 2 -->
  <section class="flex products" id="seccion2">

  <div class="imgSlide1 animate-in" data-anim-type="fade-in-right"></div>

      <div class="flex contenedor">

    <div class="sec-graf1 animate-in" data-anim-type="fade-in-left">
          <h2>90.8 Million tonnes of total production in 2016</h2>
      <div id="grafica1" class="chart1Slide2"></div>
      <div class="flex abrirSlide2">
        <h4>Examples</h4>
        <img class="flecha1" onclick="openGraf1();" src="<?php echo $ruta; ?>img/snapshot/Flecha_Abajo.svg">
      </div>
      <div class="flex descripcionItem no-print">
        <h3>49%<br>Packaging papers<br>and boards</h3>
        <div class="imgCirculo imgCir-1"></div>
        <div class="flex">
          <div class="enlaceCirculo"></div>
          <div class="finCirculo"></div>
        </div>
        <div class="textoDescrip">
          <h4>Mainly used for wrapping and packaging purposes.</h4>
          <div class="flex lista-descrip">
            <ul>
              <li>Boxes</li>
              <li>Bags</li>
              <li>Packaging</li>
            </ul>
            <ul>
              <li>Wrapping</li>
              <li>Toys and Games</li>
              <li>Product Display</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--Información para imprimir-->
    <div class="flex descripcionItem print">
      <h3>49%<br>Packaging papers<br>and boards</h3>
      <div class="imgCirculo imgCir-1"></div>
      <div class="flex">
        <div class="enlaceCirculo"></div>
        <div class="finCirculo"></div>
      </div>
      <div class="textoDescrip">
        <h4>Mainly used for wrapping and packaging purposes.</h4>
        <div class="flex lista-descrip">
          <ul>
            <li>Boxes</li>
            <li>Bags</li>
            <li>Packaging</li>
          </ul>
          <ul>
            <li>Wrapping</li>
            <li>Toys and Games</li>
            <li>Product Display</li>
          </ul>
        </div>
      </div>
    </div>

    <!--Información para imprimir-->

    <div class="sec-graf2 animate-in" data-anim-type="fade-in-right">
      <div id="grafica2" class="chart1Slide2"></div>
      <div class="flex abrirSlide2">
        <h4>Examples</h4>
        <img class="flecha2" onclick="openGraf2();" src="<?php echo $ruta; ?>img/snapshot/Flecha_Abajo.svg">
      </div>
      <div class="flex descripcionItem descGraf2 no-print">
        <h3>38.8%<br>Newsprint and<br>Graphic papers</h3>
        <div class="imgCirculo imgCir-2"></div>
        <div class="flex">
          <div class="enlaceCirculo"></div>
          <div class="finCirculo"></div>
        </div>
        <div class="textoDescrip">
          <h4>Represent the sum of newsprint, uncoated mechanical, uncoated woodfree and coated papers.</h4>
          <div class="flex lista-descrip">
            <ul>
              <li>Newspapers</li>
              <li>Magazines</li>
              <li>Books</li>
                              <li>Brochures</li>
            </ul>
            <ul>
              <li>Catalogues</li>
              <li>Flyers</li>
              <li>Envelopes</li>
              <li>Greeting Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--Información para imprimir-->

    <div class="flex descripcionItem descGraf2 print">
      <h3>38.8%<br>Newsprint and<br>Graphic papers</h3>
      <div class="imgCirculo imgCir-2"></div>
      <div class="flex">
        <div class="enlaceCirculo"></div>
        <div class="finCirculo"></div>
      </div>
      <div class="textoDescrip">
        <h4>Represent the sum of newsprint, uncoated mechanical, uncoated woodfree and coated papers.</h4>
        <div class="flex lista-descrip">
          <ul>
            <li>Newspapers</li>
            <li>Magazines</li>
            <li>Books</li>
                            <li>Brochures</li>
          </ul>
          <ul>
            <li>Catalogues</li>
            <li>Flyers</li>
            <li>Envelopes</li>
            <li>Greeting Cards</li>
          </ul>
        </div>
      </div>
    </div>

    <!--Información para imprimir-->



      <div class="sec-graf3 animate-in" data-anim-type="fade-in-right">
        <div id="grafica3" class="chart1Slide2"></div>
        <div class="contenido2">
        <div class="flex abrirSlide2">
          <h4>Examples</h4>
          <img class="flecha3" onclick="openGraf3();" src="<?php echo $ruta; ?>img/snapshot/Flecha_Abajo.svg">
        </div>
        </div>
        <div class="flex descripcionItem descGraf3 no-print">
          <h3>7.8%<br>Hygiene papers</h3>
          <div class="imgCirculo imgCir-3"></div>
          <div class="flex">
            <div class="enlaceCirculo"></div>
            <div class="finCirculo"></div>
          </div>
          <div class="textoDescrip">
            <h4>Cover a wide range of tissue and other hygienic papers for use in households or commercial and industrial premises.</h4>
            <div class="flex lista-descrip">
              <ul>
                <li>Toilet Papers</li>
                <li>Tissues</li>
                <li>Napkins</li>
              </ul>
              <ul>
                <li>Kitchen Paper</li>
                <li>Nappies</li>
                <li>Sanitary Napkins</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--Información para imprimir-->

      <div class="flex descripcionItem descGraf3 print">
        <h3>7.8%<br>Hygiene papers</h3>
        <div class="imgCirculo imgCir-3"></div>
        <div class="flex">
          <div class="enlaceCirculo"></div>
          <div class="finCirculo"></div>
        </div>
        <div class="textoDescrip">
          <h4>Cover a wide range of tissue and other hygienic papers for use in households or commercial and industrial premises.</h4>
          <div class="flex lista-descrip">
            <ul>
              <li>Toilet Papers</li>
              <li>Tissues</li>
              <li>Napkins</li>
            </ul>
            <ul>
              <li>Kitchen Paper</li>
              <li>Nappies</li>
              <li>Sanitary Napkins</li>
            </ul>
          </div>
        </div>
      </div>

      <!--Información para imprimir-->

      <div class="sec-graf4 animate-in" data-anim-type="fade-in-left">
        <div id="grafica4" class="chart1Slide2"></div>
        <div class="contenido2 cont2Div">
          <div class="flex abrirSlide2">
            <h4>Examples</h4>
            <img class="flecha4" onclick="openGraf4();" src="<?php echo $ruta; ?>img/snapshot/Flecha_Abajo.svg">
          </div>
        </div>
        <div class="flex descripcionItem descGraf4 no-print">
          <h3>4.4%<br>Other papers<br>and boards</h3>
          <div class="imgCirculo imgCir-4"></div>
          <div class="flex">
            <div class="enlaceCirculo"></div>
            <div class="finCirculo"></div>
          </div>
          <div class="textoDescrip">
            <h4>Are used for industrial and special purposes.</h4>
            <div class="flex lista-descrip">
              <ul>
                <li>Cigarette Paper</li>
                <li>Stock of Filter Paper</li>
                <li>Gypsum liners</li>
                <li>Insulation</li>
              </ul>
              <ul>
                <li>Building Materials</li>
                <li>Roofing Materials</li>
                <li>Waxing</li>
                <li>Asphalting</li>
              </ul>
            </div>
          </div>
        </div>
    </div>

    <!--Información para imprimir-->

    <div class="flex descripcionItem descGraf4 print">
      <h3>4.4%<br>Other papers<br>and boards</h3>
      <div class="imgCirculo imgCir-4"></div>
      <div class="flex">
        <div class="enlaceCirculo"></div>
        <div class="finCirculo"></div>
      </div>
      <div class="textoDescrip">
        <h4>Are used for industrial and special purposes.</h4>
        <div class="flex lista-descrip">
          <ul>
            <li>Cigarette Paper</li>
            <li>Stock of Filter Paper</li>
            <li>Gypsum liners</li>
            <li>Insulation</li>
          </ul>
          <ul>
            <li>Building Materials</li>
            <li>Roofing Materials</li>
            <li>Waxing</li>
            <li>Asphalting</li>
          </ul>
        </div>
      </div>
    </div>

    <!--Información para imprimir-->

    </div>
  </section>
  <!-- /Seccion 2 -->
  <!-- Seccion 3 -->
  <seccion class="papper">
    <div class="gifPaper animate-in" data-anim-type="fade-in-left" data-anim-delay="10"></div>
  </seccion>
  <!-- /Seccion 3 -->
  <!-- /Seccion 4 -->
  <section class="flex certified">
    <div class="flex certif-col1 animate-in" data-anim-type="fade-in-right" data-anim-delay="0">
      <p>Our products are made using renewable and recyclable resources that come from <b>certified natural forests.</b></p>
      <p>CEPI has a long standing commitment towards sustainable forest management and the use of forest resources.</p>
      <p>Consumers can be certain that products are made in sustainable ways that  respect the environment.</p>
    </div>
    <div class="certif-col2 animate-in" data-anim-type="fade-in-left" data-anim-delay="0">
      <img src="<?php echo $ruta; ?>img/snapshot/seccion4/1.png">
    </div>
  </section>
  <!-- /Seccion 4 -->
  <!-- Seccion 5 -->
  <section class="flex cepiFigures animate-in" data-anim-type="fade-in-left" data-anim-delay="0">
    <h2>Cepi in figures</h2>
    <div class="figureCepi">
      <h2 id="count1">0</h2>
      <h2 id="count2">0</h2>
      <h2 id="count3">0</h2>
      <h2 id="count4">0</h2>
      <h2 id="count5">0</h2>
      <h2 id="count6">0</h2>
      <h2 id="count7">0</h2>
      <h2 id="count8">0</h2>
      <h2 id="count9">0</h2>
      <h2 id="count10">0</h2>
    </div>
    <div class="flex cepFig-pie">
      <img src="<?php echo $ruta; ?>img/snapshot/seccion5/pIzq.svg">
      <p>Pulp and paper producers are part of the much larger forest-based industry sector, which overall represents about 7% of EU manufacturing GDP.</p>
      <img src="<?php echo $ruta; ?>img/snapshot/seccion5/pDer.svg">
    </div>
  </section>
  <!-- Seccion 5 -->
  <!-- Seccion 6 -->
  <section class="flex keyStatistics">
    <div class=" flex key-col1 animate-in" data-anim-type="fade-in-right" data-anim-delay="0">
      <h2>KEY STATISTICS 2015</h2>
      <p>Ernst & Young issued a limited
        <a target="_blank" href="http://digibook.digi-work.com/Digibooks.aspx/Get/cepi/1521/2015_Assurance_Statement_for_Webpdf">
          assurance statement
        </a> on the data quality rating that CEPI carried out on its core indicators.
      </p>
      <p>To download the statement and other statistics of our performance please go to
        <a target="_blank" href="http://www.cepi.org/topics/statistics">
          www.cepi.org/topics/statistics.
        </a>
        You can also request your own paper copy of the statement by sending an email to
        <a href="mailto:mail@cepi.org?Subject=Hello%20again">
          mail@cepi.org.
      </p>
        <br>
      <a href=""> </a>
    </div>
  </section>
  <!-- /Seccion 6 -->

  <!-- Seccion 7: Charts -->
  <section class="flex keyStatistics no-print">
    <div class="key-col2 animate-in center" data-anim-type="fade-in-left" data-anim-delay="0">
        <input type="button" id="btn-industry" name="btn-industry" value="Our Industry" class="btn-chartSnapshotIndustry">
        <input type="button" id="btn-production" name="btn-industry" value="Production & Consumption" class="btn-chartSnapshotProduction">
        <br><br>
      <div class="container">
        <div class="row">
          <div class="col s12 m6 l6">
            <select id="slc-industry" class="browser-default slc-menuSnapshot" name="">
              <option value="key">Key Figures</option>
              <option value="manufacturing">Direct manufacturing cost structure</option>
              <option value="profitability">Profitability</option>
              <option value="investment">Investment / Turnover ratio</option>
              <option value="labour">Labour Productivity Comparison</option>
              <option value="accident">Accident Rate</option>
            </select>
            <select id="slc-production" class="browser-default slc-menuSnapshot" name="">
              <option value="evolution">Evolution of Paper & Board Production by Region</option>
              <option value="paper">Paper & Board Consumption per Capita</option>
              <option value="board">Paper & Board Production by Grade</option>
            </select>
          </div>
        </div>
        <div class="row">
          <!--Higcharts div-->
          <div id="chartsSnapshot" style="width:90%; height: 30rem; margin: 0 auto">
          </div>
          <!--End higcharts div-->
        </div>
      </div>
    </div>
  </section>
  <!-- /Seccion 7 -->

  <!-- Print Key table -->
  <section class="tablesSnapshot ">
    <div class="center keyTable">
      <br><tspan class="tableTitle">Key Figures</tspan><br><br>
      <text x='486' text-anchor='middle' class='highcharts-subtitle' style='color:#666666;fill:#666666; y=45'>
      <tspan class="tableSubTitle">CEPI Statistics - Status as of 2015</tspan><br>
      </text>
      <br><div id='table-snapshot'></div><br>
      <table class='striped'>
        <thead>
          <tr>
            <th data-field='id'><h1></h1></th>
            <th data-field='id'><h1>2000</h1></th>
            <th data-field='id'><h1>2005</h1></th>
            <th data-field='id'><h1>2010</h1></th>
            <th data-field='id'><h1>2014</h1></th>
            <th data-field='id'><h1>2015</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><h1>Turnover (Million €)</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>P&B Production ('000 tonnes)</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Market Pulp ('000 tonnes)</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Share of global production</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Companies</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Mills</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Employment</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Added Value (Million €)</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
          <tr>
            <th><h1>Investments (Million €)</h1></th>
            <th>79,388</th>
            <th>74,537</th>
            <th>75,790</th>
            <th>78,437</th>
            <th>80,241</th>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <!-- End Key table -->

  <!--Print Manufacturing Table-->
  <section class="tablesSnapshot">
    <div class="center manufacturingTable"><br>
      <br><tspan class="tableTitle">Direct manufacturing cost structure of the European pulp & paper industry in 2015</tspan><br><br>
      <text x='486' text-anchor='middle' class='highcharts-subtitle' style='color:#666666;fill:#666666; y=45'>
      <tspan class="tableSubTitle">CEPI Statistics - Status as of 2015</tspan><br>
      </text>
      <br><div id='table-snapshot'></div><br>
      <table class='striped'>
        <thead>
          <tr>
            <th data-field='id'><h1>Consumable</h1></th>
            <th data-field='id'><h1>€/Tn</h1></th>
            <th data-field='id'><h1>M€/Y</h1></th>
            <th data-field='id'><h1>%</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><h1>Capital Cost</h1></th>
            <th>47.8</th>
            <th> 5,629.4 </th>
            <th>9.3%</th>
          </tr>
          <tr>
            <th><h1>Maintenance</h1></th>
            <th>40.1</th>
            <th> 4,723.5 </th>
            <th>7.8%</th>
          </tr>
          <tr>
            <th><h1>Labour</h1></th>
            <th>52.1</th>
            <th> 6,130.6 </th>
            <th>10.2%</th>
          </tr>
          <tr>
            <th><h1>Electricity</h1></th>
            <th>20.8</th>
            <th> 2,446.5 </th>
            <th>4.1%</th>
          </tr>
          <tr>
            <th><h1>Fuels</h1></th>
            <th>45.4</th>
            <th> 5,337.7 </th>
            <th>8.9%</th>
          </tr>
          <tr>
            <th><h1>Chemicals</h1></th>
            <th>67.2</th>
            <th> 7,909.8 </th>
            <th>13.1%</th>
          </tr>
          <tr>
            <th><h1>Market Pulp</h1></th>
            <th>110.9</th>
            <th> 13,047.7</th>
            <th>21.7%</th>
          </tr>
          <tr>
            <th><h1>Recovered Paper</h1></th>
            <th>61.6</th>
            <th> 7,248.7 </th>
            <th>12.0%</th>
          </tr>
          <tr>
            <th><h1>Wood</h1></th>
            <th>66.1</th>
            <th> 7,776.8 </th>
            <th>12.9%</th>
          </tr>
          <tr>
            <th><h1>Sum</h1></th>
            <th>512.1</th>
            <th>60,250.7</th>
            <th>100.0%</th>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <!--End Manufacturing Table-->
  <!-- /Footer -->
  <footer class="flex">
    <div class="footer-col1 animate-in" data-anim-type="fade-in-right" data-anim-delay="0">
      <h2>Contact Persons</h2>
      <div class="flex int-ftr">
        <div class="ft-int-col1">
          <p>Industrial Policy Director<br>Bernard Lampard</p>
          <p>Industrial Policy Director<br>Bernard Lampard</p>
        </div>
        <div class="ft-int-col2">
          <p>Statistics Manager<br>Ariane Crèvecouer</p>
          <p>Statistics Manager<br>Ariane Crèvecouer</p>
        </div>
      </div>
    </div>
    <div class="flex footer-col2 animate-in" data-anim-type="fade-in-left" data-anim-delay="0">
      <h2>Gri Excel</h2>
      <p>lorem</p>
    </div>
    <div class="div-flecha-footer">
      <a href="#bannerSec"><img class="footerFlecha" src="<?php echo $ruta; ?>img/snapshot/Boton_Flecha-73.svg"></a>
    </div>
  </footer>
</main>
<!--
  **Fin Contenido
-->

<!--
** Inicio Botón FAB
-->
<?php include("../components/button-FAB.php"); ?>
    <?php include("../components/scripts.php"); ?>
    <?php include("../components/scripts-infographic.php") ?>
  </body>
</html>
