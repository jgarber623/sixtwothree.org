(function() {
	'use strict';

	var $pagination = document.querySelector('.pagination');

	var appendHint = function() {
		var $hint = document.createElement('p');

		$hint.className = 'hint';
		$hint.innerHTML = '<b>Hint:</b> Use the left and right arrow keys to navigate between pages.';

		$pagination.appendChild($hint);
	};

	var Pagination = window.Pagination = function() {};

	Pagination.prototype = {
		init: function() {
			if ($pagination) {
				this.$next = $pagination.querySelector('a.next_page');
				this.$prev = $pagination.querySelector('a.previous_page');

				if (this.$next || this.$prev) {
					window.addEventListener('keyup', this.keyup.bind(this));
					appendHint();
				}
			}

		},

		keyup: function(event) {
			var keyCode = event.which;

			if (keyCode === 37 && this.$prev) {
				location.href = this.$prev.href;
			}

			if (keyCode === 39 && this.$next) {
				location.href = this.$next.href;
			}
		}
	};
})();