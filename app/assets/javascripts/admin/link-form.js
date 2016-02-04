;(function() {
	'use strict';

	var $url = document.getElementById('link_url'),
		$title = document.getElementById('link_title'),
		$tags = document.getElementById('link_tag_list');

	var handleResponse = function(response) {
		return response.json().then(function(json) {
			if (json.success) {
				$title.value = json.title;

				if ($tags && json.tags) {
					$tags.value = json.tags.join(', ');
				}
			}
		});
	};

	var LinkForm = window.LinkForm = function($el) {
		this.$el = $el;
	};

	LinkForm.prototype = {
		init: function() {
			if ($url && $title) {
				$url.addEventListener('blur', this.blur.bind(this));
			}
		},

		blur: function(event) {
			var urlValue = $url.value;

			if (/^https?:\/\//.test(urlValue) && !$title.value) {
				var options = {
					body: new Blob(['url=' + urlValue + '&authenticity_token=' + encodeURIComponent(this.$el.querySelector('[name=authenticity_token]').value)]),
					credentials: 'include',
					headers: new Headers({
						'Accept': 'application/json'
					}),
					method: 'POST'
				};

				window.fetch('/links/fetch', options).then(handleResponse);
			}
		}
	};
}());