(function() {
	'use strict';

	window.Entry = function($el) {
		return {
			init: function() {
				var $title = $el.querySelector('.entry-title');

				if ($title) {
					var $shim = document.createElement('i');

					$shim.innerHTML = '<svg role="img" version="1.1"><use xlink:href="#icons-' + $el.getAttribute('data-entry-type') + '"></svg>';
					$title.parentNode.insertBefore($shim, $title);
				}
			}
		};
	};
})();