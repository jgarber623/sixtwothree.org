(function(window, $) {
	'use strict';

	window.Navigation = function() {
		var collapsible = new Collapsible($('.global-navigation-control')[0]);

		var handleResize = function() {
			collapsible[window.matchMedia('(min-width: 50em)').matches ? 'teardown' : 'init']();
		};

		return {
			init: function() {
				collapsible.init();

				window.addEventListener('load', handleResize);
				window.addEventListener('resize', handleResize);
			}
		};
	};
})(window, CashCash);