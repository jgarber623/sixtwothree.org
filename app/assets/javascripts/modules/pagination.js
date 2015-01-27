;(function(root, factory) {
	root.Pagination = factory();
}(this, function() {
	var Pagination = function() {
		this.$el = document.querySelector('.pagination');
	};

	Pagination.prototype.init = function() {
		if (this.$el) {
			this.$next = this.$el.querySelector('a.next_page');
			this.$prev = this.$el.querySelector('a.previous_page');

			if (this.$next || this.$prev) {
				this.bindEvents();
				this.appendHint();
			}
		}
	};

	Pagination.prototype.appendHint = function() {
		var $hint = document.createElement('p');

		$hint.classList.add('hint');
		$hint.innerHTML = '<b>Hint:</b> Use the left and right arrow keys to navigate between pages.';

		this.$el.appendChild($hint);
	};

	Pagination.prototype.bindEvents = function() {
		window.addEventListener('keyup', this.keyup.bind(this));
	};

	Pagination.prototype.keyup = function(event) {
		var keyCode = event.which;

		if (keyCode === 37 && this.$prev) {
			location.href = this.$prev.href;
		}

		if (keyCode === 39 && this.$next) {
			location.href = this.$next.href;
		}
	};

	return Pagination;
}));