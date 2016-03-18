(function(window) {
	'use strict';

	window.AdminPanel = function() {
		var collapsible = new Collapsible(document.querySelector('.admin-panel-control'));

		var handleResize = function() {
			collapsible[window.matchMedia('(min-width: 50em)').matches ? 'teardown' : 'init']();
		};

		return {
			init: function() {
				collapsible.init();

				window.addEventListener('load', handleResize);
				window.addEventListener('resize', handleResize);

				document.querySelector('.admin-panel-container').classList.add('fixed');
			}
		};
	};
})(window);