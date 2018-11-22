function linedraw(select) {
  line_length = select.getTotalLength();
  select.attr({ 'stroke-dasharray': line_length , 'stroke-dashoffset': line_length , opacity: 0});
  select.animate({'stroke-dashoffset': 0, 'opacity': 1}, 1500, mina.easeinout);
}


  var inventory = Snap("#inventory");

  var select = inventory.select("#inventory_1");
  linedraw(select);
  var select = inventory.select("#inventory_2");
  linedraw(select);
  var select = inventory.select("#inventory_3");
  linedraw(select);
  var select = inventory.select("#inventory_4");
  linedraw(select);
  var select = inventory.select("#inventory_5");
  linedraw(select);
  var select = inventory.select("#inventory_6");
  linedraw(select);
  var select = inventory.select("#inventory_7");
  linedraw(select);
  var select = inventory.select("#inventory_8");
  linedraw(select);
  var select = inventory.select("#inventory_9");
  linedraw(select);
  var select = inventory.select("#inventory_10");
  linedraw(select);
  var select = inventory.select("#inventory_11");
  linedraw(select);
  var select = inventory.select("#inventory_12");
  linedraw(select);
  var select = inventory.select("#inventory_13");
  linedraw(select);
  var select = inventory.select("#inventory_14");
  linedraw(select);
  var select = inventory.select("#inventory_15");
  linedraw(select);
  var select = inventory.select("#inventory_16");
  linedraw(select);
  var select = inventory.select("#inventory_17");
  linedraw(select);
  var select = inventory.select("#inventory_18");
  linedraw(select);
  var select = inventory.select("#inventory_19");
  linedraw(select);
  var select = inventory.select("#inventory_20");
  linedraw(select);


  var study = Snap("#study");

  var select = study.select("#study_1");
  linedraw(select);
  var select = study.select("#study_2");
  linedraw(select);
  var select = study.select("#study_3");
  linedraw(select);
  var select = study.select("#study_4");
  linedraw(select);
  var select = study.select("#study_5");
  linedraw(select);
  var select = study.select("#study_6");
  linedraw(select);
  var select = study.select("#study_7");
  linedraw(select);
  var select = study.select("#study_8");
  linedraw(select);


  var insta = Snap("#insta");

  var select = insta.select("#insta_1");
  linedraw(select);
  var select = insta.select("#insta_2");
  linedraw(select);
  var select = insta.select("#insta_3");
  linedraw(select);
  var select = insta.select("#insta_4");
  linedraw(select);
  var select = insta.select("#insta_5");
  linedraw(select);
  var select = insta.select("#insta_6");
  linedraw(select);
  var select = insta.select("#insta_7");
  linedraw(select);
  var select = insta.select("#insta_8");
  linedraw(select);


  var service = Snap("#service");

  var select = service.select("#service_1");
  linedraw(select);
  var select = service.select("#service_2");
  linedraw(select);
  var select = service.select("#service_3");
  linedraw(select);
  var select = service.select("#service_4");
  linedraw(select);
  var select = service.select("#service_5");
  linedraw(select);
  var select = service.select("#service_6");
  linedraw(select);
  var select = service.select("#service_7");
  linedraw(select);





  var arenda = Snap("#arenda");

  var select = arenda.select("#arenda_1");
  linedraw(select);
  var select = arenda.select("#arenda_2");
  linedraw(select);
  var select = arenda.select("#arenda_3");
  linedraw(select);
  var select = arenda.select("#arenda_4");
  linedraw(select);
  var select = arenda.select("#arenda_5");
  linedraw(select);
  var select = arenda.select("#arenda_6");
  linedraw(select);
  var select = arenda.select("#arenda_7");
  linedraw(select);
  var select = arenda.select("#arenda_8");
  linedraw(select);
  var select = arenda.select("#arenda_9");
  linedraw(select);
  var select = arenda.select("#arenda_10");
  linedraw(select);
  var select = arenda.select("#arenda_11");
  linedraw(select);
  var select = arenda.select("#arenda_12");
  linedraw(select);
  var select = arenda.select("#arenda_13");
  linedraw(select);
  var select = arenda.select("#arenda_14");
  linedraw(select);
  var select = arenda.select("#arenda_15");
  linedraw(select);
  var select = arenda.select("#arenda_16");
  linedraw(select);
  var select = arenda.select("#arenda_17");
  linedraw(select);

  var interier = Snap("#interier");

  var select = interier.select("#interier_1");
  linedraw(select);
  var select = interier.select("#interier_2");
  linedraw(select);
  var select = interier.select("#interier_3");
  linedraw(select);
  var select = interier.select("#interier_4");
  linedraw(select);
  var select = interier.select("#interier_5");
  linedraw(select);
  var select = interier.select("#interier_6");
  linedraw(select);
  var select = interier.select("#interier_7");
  linedraw(select);
  var select = interier.select("#interier_8");
  linedraw(select);
  var select = interier.select("#interier_9");
  linedraw(select);

  //red = study16.attr('stroke-dashoffset').replace('px', '');



//setInterval(function() {





//}, 2500);







/*

var strokeOffset = red.attr('stroke-dashoffset').replace('px', '');
 globalAnimation = Snap.animate(strokeOffset, '0', function( value ){
    red.attr({ 'stroke-dashoffset': 0 })
 }, 1500, mina.easein);

var main = Snap("#map");
var italy = main.select("#italy");
var cesko = main.select("#cesko");
var espana = main.select("#espana");
var portugal = main.select("#portugal");
var it_line = main.select("#it_line");

italy.attr({ 'transform' : 's0,0' });
espana.attr({ 'transform' : 's0,0' });
portugal.attr({ 'transform' : 's0,0' });
cesko.attr({ 'transform' : 's0,0' });
italy.animate( { 'transform' : 's1,1' }, 1000, mina.easeinout);

it = it_line.getTotalLength();

it_line.attr({'stroke-dashoffset': it});
//it_line.animate({'stroke-dashoffset': 1000}, 2000, mina.easeout);

setTimeout(function() {
  cesko.animate( { 'transform' : 's1,1' }, 1000, mina.easeinout);
}, 300);
setTimeout(function() {
  espana.animate( { 'transform' : 's1,1' }, 1000, mina.easeinout);
}, 600);
setTimeout(function() {
  portugal.animate( { 'transform' : 's1,1' }, 1000, mina.easeinout);
}, 900);

     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

*/
