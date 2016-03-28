(function($) {
	'use strict';

	window.SyndicationForm = function() {
		var $name = $('#syndication_name')[0],
			$url = $('#syndication_url')[0];

		var handleKeyup = function() {
			var urlValue = $url.value;

			if (urlValue.match(/^https?:\/\//)) {
				var hostname = urlValue.match(/^https?:\/\/(?:[a-zA-Z]+\.){0,1}([a-zA-Z0-9][a-zA-Z0-9-]+){1}\.[a-zA-Z]{2,}/)[1];

				$name.value = hostname[0].toUpperCase() + hostname.slice(1);
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
})(CashCash);