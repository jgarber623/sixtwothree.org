(function(document) {
	'use strict';

	var $name = document.getElementById('syndication_name'),
		$url = document.getElementById('syndication_url');

	window.SyndicationForm = function() {
		return {
			init: function() {
				if ($url && $name) {
					$url.addEventListener('keyup', this.keyup);
				}
			},

			keyup: function() {
				var urlValue = $url.value;

				if (urlValue.match(/^https?:\/\//)) {
					var hostname = urlValue.match(/^https?:\/\/(?:[a-zA-Z]+\.){0,1}([a-zA-Z0-9][a-zA-Z0-9-]+){1}\.[A-Za-z]{2,}/)[1];

					$name.value = hostname.charAt(0).toUpperCase() + hostname.slice(1);
				}
			}
		};
	};
})(document);