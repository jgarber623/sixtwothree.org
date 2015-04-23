;(function() {
	var SyndicationForm = window.SyndicationForm = function($el) {
		this.$el = $el;
	};

	SyndicationForm.prototype = {
		init: function() {
			this.$name = document.getElementById('syndication_name');
			this.$url = document.getElementById('syndication_url');

			this.$url.addEventListener('keyup', this.keyup.bind(this));
		},

		keyup: function(event) {
			var val = this.$url.value;

			if (val.match(/^https?:\/\//)) {
				var hostname = val.match(/^https?:\/\/(?:[a-zA-Z]+\.){0,1}([a-zA-Z0-9][a-zA-Z0-9-]+){1}\.[A-Za-z]{2,}/)[1];

				this.$name.value = hostname.charAt(0).toUpperCase() + hostname.slice(1);
			}
		}
	};
}());