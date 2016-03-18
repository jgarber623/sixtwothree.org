(function(window) {
	'use strict';

	window.Pagination = function() {
		var $pagination = document.querySelector('.pagination');

		if ($pagination) {
			var $next = $pagination.querySelector('a.next_page'),
				$prev = $pagination.querySelector('a.previous_page');
		}

		var appendHint = function() {
			var $hint = document.createElement('p');

			$hint.className = 'hint';
			$hint.innerHTML = '<b>Hint:</b> Use the left and right arrow keys to navigate between pages.';

			$pagination.appendChild($hint);
		};

		var handleKeyup = function(event) {
			var keyCode = event.which;

			if (keyCode === 37 && $prev) {
				location.href = $prev.href;
			}

			if (keyCode === 39 && $next) {
				location.href = $next.href;
			}
		};

		return {
			init: function() {
				if ($next || $prev) {
					window.addEventListener('keyup', handleKeyup);
					appendHint();
				}
			}
		};
	};
})(window);