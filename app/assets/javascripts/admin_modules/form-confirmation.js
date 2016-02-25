(function(window) {
	'use strict';

	window.FormConfirmation = function($el) {
		return {
			init: function() {
				$el.addEventListener('submit', this.submit);
			},

			submit: function(event) {
				if (!window.confirm($el.getAttribute('data-confirm'))) {
					event.preventDefault();
				}
			}
		};
	};
})(window);