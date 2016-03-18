(function(document) {
	'use strict';

	window.SyndicationForm = function() {
		var $name = document.getElementById('syndication_name'),
			$url = document.getElementById('syndication_url');

		var handleKeyup = function() {
			var urlValue = $url.value;

			if (urlValue.match(/^https?:\/\//)) {
				var hostname = urlValue.match(/^https?:\/\/(?:[a-zA-Z]+\.){0,1}([a-zA-Z0-9][a-zA-Z0-9-]+){1}\.[A-Za-z]{2,}/)[1];

				$name.value = hostname.charAt(0).toUpperCase() + hostname.slice(1);
			}
		};

		return {
			init: function() {
				if ($url && $name) {
					$url.addEventListener('keyup', handleKeyup);
				}
			}
		};
	};
})(document);