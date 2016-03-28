(function(window, $) {
	'use strict';

	window.LinkForm = function() {
		var $form = $('#new_link')[0],
			$url = $('#link_url')[0],
			$title = $('#link_title')[0],
			$tags = $('#link_tag_list')[0];

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
})(window, CashCash);