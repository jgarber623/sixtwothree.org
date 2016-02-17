(function(window) {
	'use strict';

	var FormConfirmation = window.FormConfirmation = function($el) {
		this.$el = $el;
	};

	FormConfirmation.prototype = {
		init: function() {
			this.$el.addEventListener('submit', this.submit.bind(this));
		},

		submit: function(event) {
			if (!window.confirm(this.$el.getAttribute('data-confirm'))) {
				event.preventDefault();
			}
		}
	};
})(window);