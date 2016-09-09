(function($) {
	'use strict';

	window.Entry = function($el) {
		var $title = $('.entry-title', $el)[0];

		if ($title) {
			var $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
				$use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

			$svg.setAttribute('height', '1.5em');
			$svg.setAttribute('role', 'img');
			$svg.setAttribute('version', '1.1');
			$svg.setAttribute('width', '1.5em');

			$use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icons-' + $el.getAttribute('data-entry-type'));

			$svg.appendChild($use);

			$title.parentNode.insertBefore($svg, $title);
		}
	};
})(CashCash);