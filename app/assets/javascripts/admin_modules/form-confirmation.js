(function(window) {
	'use strict';

	window.FormConfirmation = function($el) {
		var msg = $el.getAttribute('data-confirm');

		var handleSubmit = function(event) {
			if (!window.confirm(msg)) {
				event.preventDefault();
			}
		};

		return {
			init: function() {
				$el.addEventListener('submit', handleSubmit);
			}
		};
	};
})(window);