(function(window, $) {
	'use strict';

	window.AdminPanel = function() {
		var collapsible = new Collapsible($('.admin-panel-control')[0]);

		var handleResize = function() {
			collapsible[window.matchMedia('(min-width: 50em)').matches ? 'teardown' : 'init']();
		};

		return {
			init: function() {
				collapsible.init();

				window.addEventListener('load', handleResize);
				window.addEventListener('resize', handleResize);

				$('.admin-panel-container')[0].classList.add('fixed');
			}
		};
	};
})(window, CashCash);