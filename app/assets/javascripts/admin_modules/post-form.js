(function(document) {
	'use strict';

	window.PostForm = function() {
		var $title = document.getElementById('post_title'),
			$slug = document.getElementById('post_slug');

		var handleKeyup = function() {
			setTimeout(function() {
				var titleValue = $title.value;

				if (titleValue) {
					$slug.value = titleValue.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9\-]/g, '');
				}
			}, 500);
		};

		return {
			init: function() {
				if ($title && $slug && !$slug.value) {
					$title.addEventListener('keyup', handleKeyup);
				}
			}
		};
	};
})(document);