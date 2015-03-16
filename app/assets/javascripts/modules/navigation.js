;(function(root, factory) {
	root.Navigation = factory();
}(this, function() {
	var Navigation = function($el) {
		this.$el = $el;
	};

	Navigation.prototype = {
		init: function() {
			this.appendButton();
			this.bindEvents();
		},

		appendButton: function() {
			this.$button = document.createElement('button');

			var attributes = {
				'aria-controls': 'navigation',
				'aria-expanded': false,
				'aria-hidden': true,
				'class': 'toggle-button',
				'type': 'button'
			};

			for (var key in attributes) {
				this.$button.setAttribute(key, attributes[key]);
			}

			this.$button.innerHTML = 'Menu';

			this.$el.parentNode.insertBefore(this.$button, this.$el);
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

				this.$button.setAttribute('aria-hidden', isHidden);
				this.toggle(isHidden);
			}.bind(this), 100);
		},

		toggle: function(value) {
			this.$button.setAttribute('aria-expanded', value);
			this.$el.setAttribute('aria-hidden', !value);
		}
	};

	return Navigation;
}));