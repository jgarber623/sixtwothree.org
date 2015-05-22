;(function() {
	var Navigation = window.Navigation = function($control) {
		this.$control = $control;
	};

	Navigation.prototype = {
		init: function() {
			this.$region = document.getElementById(this.$control.getAttribute('aria-controls'));

			this.bindEvents();
		},

		bindEvents: function() {
			window.addEventListener('load', this.handleResize.bind(this));
			window.addEventListener('resize', this.handleResize.bind(this));

			this.$control.addEventListener('click', this.handleClick.bind(this));
		},

		handleClick: function(event) {
			event.preventDefault();

			this.toggle(this.$control.getAttribute('aria-expanded') !== 'true');
		},

		handleResize: function(event) {
			var isHidden = window.matchMedia('(min-width: 50em)').matches;

			this.$control[isHidden ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
			this.toggle(isHidden);
		},

		toggle: function(value) {
			this.$control.setAttribute('aria-expanded', value);
			this.$region[!value ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
		}
	};
}());