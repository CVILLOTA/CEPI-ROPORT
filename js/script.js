$(function() {
  //Creamos los hover para el menú principal
  $('#icon-home').hover(function() {
    $('#icon-home-hijo').css('background-color', '#8CC640');
  }, function() {
    // vuelve a dejar el <div> como estaba al hacer el "mouseout"
    $('#icon-home-hijo').css('background-color', '');
  });

  $('#icon-sustainability').hover(function() {
    $('#icon-sustainability-hijo').css('background-color', '#6CBD56');
  }, function() {
    $('#icon-sustainability-hijo').css('background-color', '');
  });

  $('#icon-snapshot').hover(function() {
    $('#icon-snapshot-hijo').css('background-color', '#009347');
  }, function() {
    $('#icon-snapshot-hijo').css('background-color', '');
  });

  $('#icon-market').hover(function() {
    $('#icon-market-hijo').css('background-color', '#6AA242');
  }, function() {
    $('#icon-market-hijo').css('background-color', '');
  });

  $('#icon-policy').hover(function() {
    $('#icon-policy-hijo').css('background-color', '#51A332');
  }, function() {
    $('#icon-policy-hijo').css('background-color', '');
  });

  $('#icon-forest').hover(function() {
    $('#icon-policy-hijo').css('background-color', '#51A332');
    $('#icon-forest-hijo').css('background-color', '#51A332');
  }, function() {
    $('#icon-policy-hijo').css('background-color', '');
    $('#icon-forest-hijo').css('background-color', '');
  });

  $('#icon-bioeconomy').hover(function() {
    $('#icon-policy-hijo').css('background-color', '#51A332');
    $('#icon-bioeconomy-hijo').css('background-color', '#51A332');
  }, function() {
    $('#icon-policy-hijo').css('background-color', '');
    $('#icon-bioeconomy-hijo').css('background-color', '');
  });

  $('#icon-energy').hover(function() {
    $('#icon-policy-hijo').css('background-color', '#51A332');
    $('#icon-energy-hijo').css('background-color', '#51A332');
  }, function() {
    $('#icon-policy-hijo').css('background-color', '');
    $('#icon-energy-hijo').css('background-color', '');
  });

  $('#icon-circular').hover(function() {
    $('#icon-policy-hijo').css('background-color', '#51A332');
    $('#icon-circular-hijo').css('background-color', '#51A332');
  }, function() {
    $('#icon-policy-hijo').css('background-color', '');
    $('#icon-circular-hijo').css('background-color', '');
  });

  $('#icon-enviroment').hover(function() {
    $('#icon-policy-hijo').css('background-color', '#51A332');
    $('#icon-enviroment-hijo').css('background-color', '#51A332');
  }, function() {
    $('#icon-policy-hijo').css('background-color', '');
    $('#icon-enviroment-hijo').css('background-color', '');
  });

  $('#icon-case').hover(function() {
    $('#icon-case-hijo').css('background-color', '#26B6CC');
  }, function() {
    $('#icon-case-hijo').css('background-color', '');
  });

  $('#icon-glosary').hover(function() {
    $('#icon-glosary-hijo').css('background-color', '#005EB8');
  }, function() {
    $('#icon-glosary-hijo').css('background-color', '');
    });
});


$('.button-collapse').sideNav({
    menuWidth: 330, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: false  // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);

$(document).ready(function(){
  $('.slider').slider({full_width: true});
});

//Start select menu
$(document).ready(function() {
    $('select').material_select();
  });
//Ocultando las listas de select snapshot
$("#slc-production").hide();

//Show select of botton
$('#btn-industry').click(function(){
  //Mostrmos u ocultamos contenido
  $("#slc-industry").show();
  $("#slc-production").hide();
  //Cambiamos los estilos de color del botón al darle click
  $('#btn-production').css('background-color', 'white');
  $('#btn-production').css('color', '#54a23a');
  $('#btn-industry').css('background-color', '#54a23a');
  $('#btn-industry').css('color', 'white');
  chartKeySnapshot();
});
$('#btn-production').click(function(){
  //Mostrmos u ocultamos contenido
  $("#slc-production").show();
  $("#slc-industry").hide();
  //Cambiamos los estilos de color del botón al darle click
  $('#btn-industry').css('background-color', 'white');
  $('#btn-industry').css('color', '#54a23a');
  $('#btn-production').css('background-color', '#54a23a');
  $('#btn-production').css('color', 'white');
  chartEvolutionSnapshot();
});

//Detectar la selección
$("#slc-industry").change(function() {
 var mivalor = $("#slc-industry").val()
 switch(mivalor){
   case 'key':
    chartKeySnapshot();
    break;
   case 'manufacturing':
    chartmanufacturingSnapshot();
   break;
   case 'profitability':
    chartprofitabilitySnapshot();
   break;
   case 'investment':
    chartinvestmentSnapshot();
   break;
   case 'labour':
    chartlabourSnapshot();
   break;
   case 'accident':
    chartaccidentSnapshot();
   break;
 }
});
$("#slc-production").change(function() {
  var mivalor = $("#slc-production").val()
  switch (mivalor) {
    case 'evolution':
      chartEvolutionSnapshot();
     break;
   case 'paper':
     chartPaperSnapshot();
    break;
   case 'board':
    chartBoardSnapshot();
   break;
 }
});
