;(function(root, factory) {
	root.SyndicationForm = factory();
}(this, function() {
	var SyndicationForm = function($el) {
		this.$el = $el;
		this.$nameField = $el.querySelector('input[type="text"]');
		this.$urlField = $el.querySelector('input[type="url"]');
	};

	SyndicationForm.prototype.init = function() {
		this.$urlField.addEventListener('keyup', this.keyup.bind(this));
	};

	SyndicationForm.prototype.keyup = function(event) {
		var val = this.$urlField.value;

		if (val.match(/^https?:\/\//)) {
			var hostname = val.match(/^https?:\/\/(?:[a-zA-Z]+\.){0,1}([a-zA-Z0-9][a-zA-Z0-9-]+){1}\.[A-Za-z]{2,}/)[1];

			this.$nameField.value = hostname.charAt(0).toUpperCase() + hostname.slice(1);
		}
	};

	return SyndicationForm;
}));