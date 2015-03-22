;(function(root, factory) {
	root.LinkForm = factory();
}(this, function() {
	var LinkForm = function($el) {
		this.$el = $el;
	};

	LinkForm.prototype = {
		init: function() {
			this.$url = document.getElementById('link_url');
			this.$title = document.getElementById('link_title');

			this.xhr = new XMLHttpRequest();
			this.xhr.onload = this.onload.bind(this);

			this.$url.addEventListener('keyup', this.keyup.bind(this));
		},

		fetch: function() {
			var val = this.$url.value;

			if (/^https?:\/\//.test(val)) {
				var authParamName = 'authenticity_token',
					params = 'url=' + val + '&' +
					authParamName + '=' + encodeURIComponent(this.$el.querySelector('[name=' + authParamName + ']').value);

				this.xhr.open('POST', '/links/fetch');

				this.xhr.setRequestHeader('Accept', 'application/json');
				this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				this.xhr.send(params);
			}
		},

		keyup: function(event) {
			setTimeout(this.fetch.bind(this), 1000);
		},

		onload: function() {
			if (this.xhr.status === 200) {
				var response = JSON.parse(this.xhr.responseText);

				if (response.success) {
					this.$title.value = response.title;
				}
			}
		}
	};

	return LinkForm;
}));