;(function($){
	$('body').css('margin', 0);
  $.fn.spotlight = function(options){
    
    var settings = $.extend({
      color: "#000",
      opacity: 0.6,
      padding: 0,
      spotlightShape: 'circle',
      closeOnClick: true,
      closeOnEsc: true
    }, options ),
        canvasId = '#spotlightcanvas',
        canvas,
        context;
    
    function renderCanvas(){
      var height,width,margin;
      $(canvasId).remove();
      width = $(window).width();
      height = $(window).height();
      canvas = $('<canvas id="' + canvasId + '" width="' + width + '" height="' + height + '"></canvas>');
      $('body').append(canvas);
      canvas.css({
		'position': 'absolute',
		'z-index': 99998,
		'top': 0,
		'left': 0,
		'bottom': 0,
		'right': 0,
	  });
      canvas.width = width;
      canvas.height = height;
      context = canvas[0].getContext("2d");
      context.fillStyle = settings.color;
      context.globalAlpha = 0.6;
      context.rect(0, 0, width, height);
      context.fill();
      canvas.show();
    }
    
    function removeCanvas(){
    	canvas.remove();
    }
    
    function renderSpotlight(el){
      renderCanvas();
      context.globalAlpha = 1;
      context.globalCompositeOperation = 'destination-out';
      context.restore();
      if (settings.spotlightshape == 'rectangle'){
        renderRectangleSpotlight(el);
      } else {
        renderCircleSpotlight(el);
      }
    }
    
    function renderCircleSpotlight(el){
      var width = el.outerWidth(),
          height = el.outerHeight(),
          offset = el.offset(),
          left = offset.left + (width / 2),
          top = offset.top + (height / 2),
          size,
          radius;
      size = (width > height ? width : height);
      radius = (size / 2) + settings.padding;
      console.log({radius:radius,width:width,height:height,left:left,top:top});
      context.beginPath();
      context.arc(left, top, radius, 0, 2 * Math.PI, false);
      context.fillStyle = "white";
      context.fill();
    }
    
    function renderRectangleSpotlight(el){
      var offset = el.offset(),
          left = offset.left - settings.padding,
          top = offset.top - settings.padding,
          width = el.outerWidth() + (settings.padding * 2),
          height = el.outerHeight() + (settings.padding * 2);
      console.log({width:width,height:height,left:left,top:top});
      context.beginPath();
      context.rect(left,top,width,height);
      context.fillStyle = "white";
      context.fill();
    }
    
    function registerEvents(){
      if (settings.closeOnClick){
      	$(document).on('click', removeCanvas);
      }
      if (settings.closeOnEsc){
        $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            removeCanvas();
          }
        });
      }
    }
    
    return this.each(function(){
      renderSpotlight($(this));
      window.setTimeout(registerEvents, 100);
    });
}
}(jQuery));