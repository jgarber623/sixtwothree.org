(function(window) {
	'use strict';

	var $control = document.querySelector('.global-navigation-control');

	window.Navigation = function() {
		var collapsible = new Collapsible($control);

		return {
			init: function() {
				collapsible.init();

				window.addEventListener('load', this.resize);
				window.addEventListener('resize', this.resize);
			},

			resize: function() {
				var isHidden = window.matchMedia('(min-width: 50em)').matches;

				$control[isHidden ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
				collapsible.toggle(isHidden);
			}
		};
	};
})(window);