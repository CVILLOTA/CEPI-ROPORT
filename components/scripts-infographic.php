<script src="<?php echo $ruta; ?>js/infographics/slide.js"></script>
<script src="<?php echo $ruta; ?>js/infographics/main.js"></script>
<script src="<?php echo $ruta; ?>js/infographics/countUp.js"></script>
<script src="<?php echo $ruta; ?>js/infographics/chartSetup.js"></script>


<!-- /Jquery -->
<!-- AnimacionJs -->
<script src="<?php echo $ruta; ?>js/infographics/animations/appear.min.js" type="text/javascript"></script>
<script src="<?php echo $ruta; ?>js/infographics/animations/animations.min.js" type="text/javascript"></script>
<script>
$(document).ready(function() {
  $('.fades, .bounces, .zooms, .flips').on('change', function() {
    var elem = $('#sandbox'),
      effect = $(this).val();

    elem.removeClass().addClass('animating bm-remove').addClass(effect);

    elem.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      elem.removeClass(effect).removeClass('animating');
    });
  });

  $('.show-off').on('change', function() {
    var elem = $('#sandbox'),
      effect = $(this).val(),
      exit = $(this).attr('data-exit');

    if (exit) animateEnd('#sandbox', true, true, effect);
    else animate('#sandbox', effect);
  });
});
</script>
<!-- /AnimacionJs -->



<script type="text/javascript">

function openGraf1 () {
	$(".sec-graf1").toggleClass('openGraf1');
	$(".flecha1").toggleClass('rotarFlecha');
}
function openGraf2 () {
	$(".sec-graf2").toggleClass('openGraf2');
	$(".flecha2").toggleClass('rotarFlecha');
}
function openGraf3 () {
	$(".sec-graf3").toggleClass('openGraf3');
	$(".flecha3").toggleClass('rotarFlecha');
}
function openGraf4 () {
	$(".sec-graf4").toggleClass('openGraf4');
	$(".flecha4").toggleClass('rotarFlecha');
}
function slidOpen() {
	$("#main-slider-space").toggleClass('grande');
	$("#main-slider-next").toggleClass('slOrient');
}


function conteo() {
	var options = {
	  useEasing : true,
	  useGrouping : true,
	  separator : '.',
	  decimal : ',',
	  prefix : '',
	  suffix : ''
	};
	var count1 = new CountUp("count1", 0, 18, 0, 12.5, options);
	var count2 = new CountUp("count2", 0, 920, 0, 12.5, options);
	var count3 = new CountUp("count3", 0, 505, 0, 12.5, options);
	var count4 = new CountUp("count4", 0, 181000, 0, 12.5, options);
	var count5 = new CountUp("count5", 0, 95, 0, 12.5, options);
	var count6 = new CountUp("count6", 0, 75, 0, 12.5, options);
	var count7 = new CountUp("count7", 0, 23, 0, 12.5, options);
	var count8 = new CountUp("count8", 0, 16, 0, 12.5, options);
	var count9 = new CountUp("count9", 0, 83, 0, 12.5, options);
	var count10 = new CountUp("count10", 0, 20, 0, 12.5, options);
	count1.start();count2.start();count3.start();
	count4.start();count5.start();count6.start();
	count7.start();count8.start();count9.start();
	count10.start();
}

function testScroll(){
    if((window.pageYOffset>3100) && (window.pageYOffset<3400)){
    	conteo();
    }
}
window.onscroll=testScroll;
testScroll();

</script>
