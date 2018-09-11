$( document ).ready(function() {


  $( ".img" )
    .mouseenter(function() {
      var th = $(this).data('fooBar');
      var main = Snap("#img-"+th+" #main");
      var sheya = main.select("#svg_sheya"),
          golova = main.select("#svg_golova"),
          l_zr = main.select("#l_zr"),
          r_zr = main.select("#r_zr"),
          l_nos = main.select("#l_nos"),
          r_nos = main.select("#r_nos"),
          smoke = main.select("#svg_smoke"),
          smoke1 = main.select("#svg_smoke1"),
          smoke2 = main.select("#svg_smoke2"),
          smoke3 = main.select("#svg_smoke3"),
          smoke4 = main.select("#svg_smoke4"),
          smoke5 = main.select("#svg_smoke5");
          l_br = main.select("#l_br");
          r_br = main.select("#r_br");

          smoke1.attr({ 'opacity' : '0' });
          smoke2.attr({ 'opacity' : '0' });
          smoke3.attr({ 'opacity' : '0' });
          smoke4.attr({ 'opacity' : '0' });
          smoke5.attr({ 'opacity' : '0' });
          golova.attr({ 'transform' : 't0,0' });
          smoke.attr({ 'transform' : 't0,40' });

          l_zr.attr({ 'transform' : 't0,0' });
          r_zr.attr({ 'transform' : 't0,0' });

          l_br.attr({ 'transform' : 't0,0' });
          r_br.attr({ 'transform' : 't0,0' });

          sheya.attr({ 'transform' : 's1,1' });
          l_nos.attr({ 'transform' : 's1,1' });
          r_nos.attr({ 'transform' : 's1,1' });
          golova.attr({ 'transform' : 't0,250' });
          sheya.attr({ 'transform' : 't0,250' });
          main.attr({ 'opacity' : '1' });


          golova.stop().animate( { 'transform' : 't0,40' }, 500, mina.easeinout);
          sheya.stop().animate( { 'transform' : 't0,40' }, 500, mina.easeinout, function() {

            golova.animate( { 'transform' : 'r7,300,180t-4,42' }, 500, mina.easeinout, function() {
            sheya.animate( { 'transform' : 's1.04,1t0,40' }, 200, mina.linear);
            l_nos.animate( { 'transform' : 's0.8,0.8' }, 200, mina.linear);
            l_br.animate( { 'transform' : 't0,1' }, 150, mina.linear);
            r_br.animate( { 'transform' : 't0,-3' }, 150, mina.linear);
            r_nos.animate( { 'transform' : 's0.8,0.8' }, 200, mina.linear, function() {
              sheya.animate( { 'transform' : 's1,1t0,40' }, 120, mina.linear);
              l_nos.animate( { 'transform' : 's1,1' }, 120, mina.easeinout);
              r_nos.animate( { 'transform' : 's1,1' }, 120, mina.easeinout,function() {

                setTimeout(function() {
                  smoke1.attr({ 'opacity' : '1' });
                }, 30);

                setTimeout(function() {
                  smoke1.attr({ 'opacity' : '0' });
                  smoke2.attr({ 'opacity' : '1' });
                }, 110);

                setTimeout(function() {
                  smoke2.attr({ 'opacity' : '0' });
                  smoke3.attr({ 'opacity' : '1' });
                }, 190);

                setTimeout(function() {
                  smoke3.attr({ 'opacity' : '0' });
                  smoke4.attr({ 'opacity' : '1' });
                }, 270);

                setTimeout(function() {
                  smoke4.attr({ 'opacity' : '0' });
                  smoke5.attr({ 'opacity' : '1' });
                }, 350);

                setTimeout(function() {
                  smoke5.attr({ 'opacity' : '0' });
                }, 430);

              });
            });
          });
          l_zr.stop().animate( { 'transform' : 't-6,-3' }, 500, mina.easeinout);
          r_zr.stop().animate( { 'transform' : 't-6,-3' }, 500, mina.easeinout);


          });


  })
  .mouseleave(function() {
    var th = $(this).data('fooBar');
    var main = Snap("#img-"+th+" #main");
    var sheya = main.select("#svg_sheya"),
        golova = main.select("#svg_golova"),
        l_zr = main.select("#l_zr"),
        r_zr = main.select("#r_zr"),
        l_nos = main.select("#l_nos"),
        r_nos = main.select("#r_nos"),
        smoke = main.select("#svg_smoke"),
        smoke1 = main.select("#svg_smoke1"),
        smoke2 = main.select("#svg_smoke2"),
        smoke3 = main.select("#svg_smoke3"),
        smoke4 = main.select("#svg_smoke4"),
        smoke5 = main.select("#svg_smoke5");

        golova.stop().animate( { 'transform' : 't0,250' }, 100, mina.easeinout);
        sheya.stop().animate( { 'transform' : 't0,250' }, 100, mina.easeinout,function() {
          main.attr({ 'opacity' : '0' });
        });
      });


});
/*
circle = document.getElementById("b11");
tl.to(circle, 1, {morphSVG:"#b21"}, "+=1")
  .to(circle, 1, {morphSVG:"#b31"}, "+=1");





  <svg id="main" class="svgmain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><defs><style>.cls-0{fill:#f2f2f2;}.cls-5{fill:none;}.cls-6{clip-path:url(#clip-path);}.cls-7{fill:#29abe2;}.cls-8{clip-path:url(#clip-path-2);}.cls-9{fill:#6e0046;}.cls-1{fill:none;}.cls-2{fill:#db5a6a;}.cls-3{fill:#ffa4a4;}</style></defs><rect class="cls-1" y="52.72" width="400" height="250"/><g id="bacon1"><path id="b11" class="cls-2" d="M242.71,452.12s-11.71-54.45,32.85-87.3c57.81-42.62-20.49-120.13,44.62-102.15,75.39,20.81,73.81,98.6,54.47,120.19-17.88,20-50.08,55.39-19.92,87.3S275,488.19,242.71,452.12Z" transform="translate(0 -5)"/><path id="b12" class="cls-3" d="M313.5,485.16s-49.36-60.23,13.69-98.61C379,355,346.8,274.48,339.42,269.61A45.29,45.29,0,0,0,323,263.47s39.81,79.84-20.51,117.3-14.22,97.66-14.22,97.66S301.35,485.59,313.5,485.16Z" transform="translate(0 -5)"/></g>
  <g id="lico" transform="translate(0 200)">
    <clipPath id="clip-path"><ellipse id="l_glaz" class="cls-7" cx="301.5" cy="82.5" rx="9.62" ry="10.5" transform="translate(176.5 369) rotate(-81.73)"/></clipPath><clipPath id="clip-path-2"><ellipse id="r_glaz" class="cls-7" cx="349.5" cy="86.5" rx="9.8" ry="10.5" transform="matrix(0.18, -0.98, 0.98, 0.18, 200.41, 414.23)"/></clipPath></defs><title>12</title><g id="lglaz"><ellipse id="l_glaz-2" data-name="l_glaz" class="cls-0" cx="301.5" cy="82.5" rx="9.62" ry="10.5" transform="translate(176.5 369) rotate(-81.73)"/><g class="cls-6"><circle id="l_zr" class="cls-7" cx="302" cy="82" r="7"/></g></g><g id="rglaz"><ellipse id="r_glaz-2" data-name="r_glaz" class="cls-0" cx="349.5" cy="86.5" rx="9.8" ry="10.5" transform="matrix(0.18, -0.98, 0.98, 0.18, 200.41, 414.23)"/><g class="cls-8"><circle id="r_zr" class="cls-7" cx="349" cy="86" r="7"/></g></g><g id="zubi"><path class="cls-9" d="M310.13,111.29l40.53-5s3.89,17.84-15.28,22.9S310.13,111.29,310.13,111.29Z"/><path class="cls-0" d="M315.74,110.6S316,117,320,116s1.84-6.15,1.84-6.15Z"/><path class="cls-0" d="M323.74,109.6S324,116,328,115s1.84-6.15,1.84-6.15Z"/><path class="cls-0" d="M331.74,108.6S332,115,336,114s1.84-6.15,1.84-6.15Z"/><path class="cls-0" d="M339.74,107.6S340,114,344,113s1.84-6.15,1.84-6.15Z"/></g>
  </g>
  </svg>

  var b11d = "M242.71,452.12s-11.71-54.45,32.85-87.3c57.81-42.62-20.49-120.13,44.62-102.15,75.39,20.81,73.81,98.6,54.47,120.19-17.88,20-50.08,55.39-19.92,87.3S275,488.19,242.71,452.12Z"
  var b12d = "M313.5,485.16s-49.36-60.23,13.69-98.61C379,355,346.8,274.48,339.42,269.61A45.29,45.29,0,0,0,323,263.47s39.81,79.84-20.51,117.3-14.22,97.66-14.22,97.66S301.35,485.59,313.5,485.16Z"
  var b21d = "M255.19,253.36s-19.33-85.86,16.72-142.18c41.76-65.23-44.7-188.24,19.84-159.66,103.54,45.85,96.89,145.95,75.67,189-15.56,31.54-30,93.47-.8,142.5S286.39,308.74,255.19,253.36Z"
  var b22d = "M324.95,304.91s-39.76-87.1,1-162.66c32-59.41-3.94-171-11.17-178.53s-20.21-10.91-20.21-10.91S339.4,59.47,301.4,133s-1.47,161.21-1.47,161.21S312.79,305.33,324.95,304.91Z"


  $( ".img" )
    .mouseenter(function() {
      var th = $(this).data('fooBar');
      var main = Snap("#img-"+th+" #main");
      var b1 = main.select("#b11"),
          lico = main.select("#lico"),
          l_zr = main.select("#l_zr"),
          r_zr = main.select("#r_zr"),
          l_zr = main.select("#l_zr"),
          r_zr = main.select("#r_zr"),
          b2 = main.select("#b12");

      lico.attr({ 'transform' : 't0,250' });
      lico.stop().animate( { 'transform' : 't0,0' }, 500, mina.easeinout, function() {
        l_zr.stop().animate( { 'transform' : 't-6,0' }, 250, mina.easeinout);
        r_zr.stop().animate( { 'transform' : 't-6,0' }, 250, mina.easeinout);
      });
      b1.attr({d:b11d});
      b1.stop().animate({d:b21d}, 500, mina.easeinout);
      b2.attr({d:b12d});
      b2.stop().animate({d:b22d}, 500, mina.easeinout);
    })
    .mouseleave(function() {
      var th = $(this).data('fooBar');
      var main = Snap("#img-"+th+" #main");
      var b1 = main.select("#b11"),
          lico = main.select("#lico"),
          l_zr = main.select("#l_zr"),
          r_zr = main.select("#r_zr"),
          b2 = main.select("#b12");
      l_zr.stop().animate( { 'transform' : 't0,0' }, 100, mina.easeinout);
      r_zr.stop().animate( { 'transform' : 't0,0' }, 100, mina.easeinout);
      lico.stop().animate( { 'transform' : 't0,250' }, 100, mina.easeinout);
      b1.stop().animate({d:b11d}, 100, mina.easeinout);
      b2.stop().animate({d:b12d}, 100, mina.easeinout);
    });

  */
