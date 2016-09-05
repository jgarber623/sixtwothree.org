(function(window, $) {
	'use strict';

	window.Navigation = function() {
		var $navigation = $('#navigation')[0],
			$control = $('.global-navigation-control')[0],
			collapsible = new Collapsible($control);

		var handleKeyup = function(event) {
			if (event.which === 27 && $control.getAttribute('aria-expanded') === 'true') {
				collapsible.toggle();
				$control.focus();
			}
		};

		collapsible.init();

		window.addEventListener('keyup', handleKeyup);

		$navigation.className = $navigation.className + ' enhanced';
	};
})(window, CashCash);