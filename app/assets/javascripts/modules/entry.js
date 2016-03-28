(function($) {
	'use strict';

	window.Entry = function($el) {
		var $title = $('.entry-title', $el)[0];

		return {
			init: function() {
				if ($title) {
					var $shim = document.createElement('i');

					$shim.innerHTML = '<svg height="1.5em" role="img" version="1.1" width="1.5em"><use xlink:href="#icons-' + $el.getAttribute('data-entry-type') + '"></svg>';
					$title.parentNode.insertBefore($shim, $title);
				}
			}
		};
	};
})(CashCash);