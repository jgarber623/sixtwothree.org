(function(window, document) {
	'use strict';

	window.LinkForm = function() {
		var $form = document.getElementById('new_link'),
			$url = document.getElementById('link_url'),
			$title = document.getElementById('link_title'),
			$tags = document.getElementById('link_tag_list');

		var handleBlur = function() {
			if (/^https?:\/\//.test($url.value) && !$title.value) {
				var options = {
					body: new FormData($form),
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