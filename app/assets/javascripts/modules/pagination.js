(function(root, factory) {
	root.Pagination = factory();
}(this, function() {
	var Pagination = function() {
		this.init();
	};

	Pagination.prototype = {
		init: function() {
			this.$container = document.querySelector('.pagination');

			if (this.$container) {
				this.$next = this.$container.querySelector('a.next_page');
				this.$prev = this.$container.querySelector('a.previous_page');

				if (this.$next || this.$prev) {
					this.bindEvents();
					this.appendHint();
				}
			}
		},

		appendHint: function() {
			var $hint = document.createElement('p');

			$hint.classList.add('hint');
			$hint.innerHTML = '<b>Hint:</b> Use the left and right arrow keys to navigate between pages.';

			this.$container.appendChild($hint);
		},

		bindEvents: function() {
			window.addEventListener('keyup', this.keyup.bind(this));
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

	return Pagination;
}));