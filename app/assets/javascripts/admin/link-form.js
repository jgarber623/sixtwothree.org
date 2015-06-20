;(function() {
	var LinkForm = window.LinkForm = function($el) {
		this.$el = $el;
	};

	LinkForm.prototype = {
		init: function() {
			this.$url = document.getElementById('link_url');
			this.$title = document.getElementById('link_title');
			this.$tags = document.getElementById('link_tag_list');

			this.xhr = new XMLHttpRequest();
			this.xhr.onload = this.onload.bind(this);

			this.$url.addEventListener('blur', this.blur.bind(this));
		},

		blur: function(event) {
			var val = this.$url.value;

			if (/^https?:\/\//.test(val) && !this.$title.value) {
				var authParamName = 'authenticity_token',
					params = 'url=' + val + '&' +
					authParamName + '=' + encodeURIComponent(this.$el.querySelector('[name=' + authParamName + ']').value);

				this.xhr.open('POST', '/links/fetch');

				this.xhr.setRequestHeader('Accept', 'application/json');
				this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				this.xhr.send(params);
			}
		},

		onload: function() {
			if (this.xhr.status === 200) {
				var response = JSON.parse(this.xhr.responseText);

				if (response.success) {
					this.$title.value = response.title;

					if (response.tags) {
						this.$tags.value = response.tags.join(', ');
					}
				}
			}
		}
	};
}());