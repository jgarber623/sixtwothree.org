;(function() {
	var FormConfirmation = window.FormConfirmation = function($el, message) {
		this.$el = $el;
		this.message = message;
	};

	FormConfirmation.prototype = {
		init: function() {
			this.$el.addEventListener('submit', this.submit.bind(this));
		},

		submit: function(event) {
			if (!window.confirm(this.message)) {
				event.preventDefault();
			}
		}
	};
})();