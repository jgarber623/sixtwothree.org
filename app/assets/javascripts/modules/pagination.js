;(function() {
	var appendHint = function($el) {
		var $hint = document.createElement('p');

		$hint.className = 'hint';
		$hint.innerHTML = '<b>Hint:</b> Use the left and right arrow keys to navigate between pages.';

		$el.appendChild($hint);
	};

	var Pagination = window.Pagination = function($el) {
		this.$el = $el;
	};

	Pagination.prototype = {
		init: function() {
			this.$next = this.$el.querySelector('a.next_page');
			this.$prev = this.$el.querySelector('a.previous_page');

			if (this.$next || this.$prev) {
				window.addEventListener('keyup', this.keyup.bind(this));
				appendHint(this.$el);
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