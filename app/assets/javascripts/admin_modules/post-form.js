(function(document) {
	'use strict';

	var $title = document.getElementById('post_title'),
		$slug = document.getElementById('post_slug');

	var PostForm = window.PostForm = function() {};

	PostForm.prototype = {
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
})(document);