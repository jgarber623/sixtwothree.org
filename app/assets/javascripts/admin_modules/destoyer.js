(function(root, factory) {
	root.Destroyer = factory();
}(this, function() {
	var Destroyer = function(el) {
		this.el = el;

		this.init();
	};

	Destroyer.prototype = {
		init: function() {
			this.el.addEventListener('submit', this.submit);
		},

		submit: function(event) {
			if (!window.confirm('Are you sure you want to delete this?')) {
				event.preventDefault();
			}
		}
	};

	return Destroyer;
}));