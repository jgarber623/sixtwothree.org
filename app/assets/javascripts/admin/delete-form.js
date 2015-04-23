;(function() {
	var DeleteForm = window.DeleteForm = function($el) {
		this.$el = $el;
	};

	DeleteForm.prototype = {
		init: function() {
			this.$el.addEventListener('submit', this.submit);
		},

		submit: function(event) {
			if (!window.confirm('Are you sure you want to delete this?')) {
				event.preventDefault();
			}
		}
	};
}());