(function(root, factory) {
	root.Pagination = factory();
}(this, function() {
	var Pagination = function() {
		this.init();
	};

	Pagination.prototype = {
		init: function() {
			var $container = document.querySelector('.pagination');

			if ($container) {
				this.$next = $container.querySelector('a.next_page');
				this.$prev = $container.querySelector('a.previous_page');

				if (this.$next || this.$prev) {
					window.addEventListener('keyup', this.keyup.bind(this));
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

	return Pagination;
}));