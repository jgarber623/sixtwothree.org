(function(root, factory) {
	root.DeleteForm = factory();
}(this, function() {
	var DeleteForm = function(el) {
		this.el = el;

		this.init();
	};

	DeleteForm.prototype = {
		init: function() {
			this.el.addEventListener('submit', this.submit);
		},

		submit: function(event) {
			if (!window.confirm('Are you sure you want to delete this?')) {
				event.preventDefault();
			}
		}
	};

	return DeleteForm;
}));