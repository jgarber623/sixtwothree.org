(function($) {
	'use strict';

	window.PostForm = function() {
		var $title = $('#post_title')[0],
			$slug = $('#post_slug')[0];

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
})(CashCash);