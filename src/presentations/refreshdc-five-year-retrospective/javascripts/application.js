$().ready( function() {
	// $( "section" ).css( "height", $( window ).height() );
	var $window = $( window ),
		$slides = $( "section" );
	
	$slides.each( function() {
		var $this = $( this ),
			paddingTop = ( $window.height() - $this.height() ) / 2,
			height = $window.height() - paddingTop;
		
		$this.css({
			"height": height,
			"padding-top": paddingTop
		});
	});
	
	$slides.eq(0).addClass( "current" );
	
	$( document ).bind( "keyup", function(e) {
		var $current = $( "section.current" );
		
		if ( e.keyCode == 37 ) {
			$current.removeClass( "current" ).prev().addClass( "current" );
		} else if ( e.keyCode == 39 ) {
			$current.removeClass( "current" ).next().addClass( "current" );
		}
		
		$( "html, body" ).animate({
			"scrollTop": $( "section.current" ).offset().top
		}, 500, function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		});
	});
});