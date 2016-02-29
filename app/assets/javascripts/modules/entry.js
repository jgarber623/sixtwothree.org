(function() {
	'use strict';

	window.Entry = function($el) {
		return {
			init: function() {
				var $title = $el.querySelector('.entry-title');

				if ($title) {
					var $shim = document.createElement('i');

					$shim.innerHTML = '<svg height="1.5em" role="img" version="1.1" width="1.5em"><use xlink:href="#icons-' + $el.getAttribute('data-entry-type') + '"></svg>';
					$title.parentNode.insertBefore($shim, $title);
				}
			}
		};
	};
})();