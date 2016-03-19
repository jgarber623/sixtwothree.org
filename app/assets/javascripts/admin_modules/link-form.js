(function(window, document) {
	'use strict';

	window.LinkForm = function() {
		var $form = document.getElementById('new_link'),
			$authenticityToken = $form.querySelector('[name=authenticity_token]'),
			$url = document.getElementById('link_url'),
			$title = document.getElementById('link_title'),
			$tags = document.getElementById('link_tag_list');

		var handleBlur = function() {
			var urlValue = $url.value;

			if (/^https?:\/\//.test(urlValue) && !$title.value) {
				var options = {
					body: new Blob([`url=${urlValue}&authenticity_token=${encodeURIComponent($authenticityToken.value)}`]),
					credentials: 'include',
					headers: new Headers({
						'Accept': 'application/json'
					}),
					method: 'POST'
				};

				window.fetch('/links/fetch', options).then(handleResponse);
			}
		};

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

		return {
			init: function() {
				if ($url && $title) {
					$url.addEventListener('blur', handleBlur);
				}
			}
		};
	};
})(window, document);