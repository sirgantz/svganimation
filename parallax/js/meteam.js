$(document).ready(function() {
  $("#back0").animate({'top': '25'}, 1000);
  setTimeout(function() {
    $("#back0").animate({'top': '0'}, 1000);
  }, 1000);
  setInterval(function() {
    $("#back0").animate({'top': '20'}, 1000);
    setTimeout(function() {
      $("#back0").animate({'top': '0'}, 1000);
    }, 1000);
  }, 2000);
});






/*

function linedraw(select) {
  line_length = select.getTotalLength();
  select.attr({ 'stroke-dasharray': line_length , 'stroke-dashoffset': line_length , opacity: 0});
  select.animate({'stroke-dashoffset': 0, 'opacity': 1}, 1500, mina.easeinout);
}

  var inventory = Snap("#inventory");
  var select = inventory.select("#inventory_1");
  linedraw(select);


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
