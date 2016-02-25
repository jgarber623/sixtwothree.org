(function(document) {
	'use strict';

	var $title = document.getElementById('post_title'),
		$slug = document.getElementById('post_slug');

	window.PostForm = function() {
		return {
			init: function() {
				if ($title && $slug && !$slug.value) {
					$title.addEventListener('keyup', this.keyup);
				}
			},

			keyup: function(event) {
				setTimeout(function() {
					var titleValue = $title.value;

					if (titleValue) {
						$slug.value = titleValue.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9\-]/g, '');
					}
				}, 500);
			}
		};
	};
})(document);