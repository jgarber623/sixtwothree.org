(function(window) {
	'use strict';

	var $control = document.querySelector('.admin-panel-control');

	window.AdminPanel = function() {
		var collapsible = new Collapsible($control);

		return {
			init: function() {
				collapsible.init();

				window.addEventListener('load', this.resize);
				window.addEventListener('resize', this.resize);

				document.querySelector('.admin-panel-container').classList.add('fixed');
			},

			resize: function() {
				var isHidden = window.matchMedia('(min-width: 40em)').matches;

				$control[isHidden ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
				collapsible.toggle(isHidden);
			}
		};
	};
})(window);