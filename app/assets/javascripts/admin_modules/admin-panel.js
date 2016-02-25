(function(window) {
	'use strict';

	var $container = document.querySelector('.admin-panel-container'),
		$control = $container.querySelector('.admin-panel-control');

	window.AdminPanel = function() {
		return {
			init: function() {
				new Collapsible($control).init();

				$control.setAttribute('aria-expanded', false);
				$control.removeAttribute('aria-hidden');
				$container.classList.add('fixed');

				window.addEventListener('keyup', this.keyup);
			},

			keyup: function(event) {
				if (event.ctrlKey && event.which === 65) {
					$control.click();
				}
			}
		};
	};
})(window);