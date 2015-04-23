;(function(root, factory) {
	root.Navigation = factory();
}(this, function() {
	var Navigation = function($el) {
		this.$el = $el;
	};

	Navigation.prototype = {
		init: function() {
			this.$button = this.$el.querySelector('.global-navigation-toggle');
			this.$list = document.getElementById('navigation');

			this.bindEvents();
		},

		bindEvents: function() {
			window.addEventListener('load', this.handleResize.bind(this));
			window.addEventListener('resize', this.handleResize.bind(this));

			this.$button.addEventListener('click', this.handleClick.bind(this));
		},

		handleClick: function(event) {
			event.preventDefault();

			this.toggle(this.$button.getAttribute('aria-expanded') !== 'true');
		},

		handleResize: function(event) {
			var t = setTimeout(function() {
				clearTimeout(t);

				var isHidden = window.matchMedia('(min-width: 50em)').matches;

				this.$button[isHidden ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
				this.toggle(isHidden);
			}.bind(this), 100);
		},

		toggle: function(value) {
			this.$button.setAttribute('aria-expanded', value);
			this.$list[!value ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
		}
	};

	return Navigation;
}));