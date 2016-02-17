(function() {
	'use strict';

	var $control = document.querySelector('.global-navigation-control'),
		$region = document.getElementById($control.getAttribute('aria-controls'));

	var Navigation = window.Navigation = function() {};

	Navigation.prototype = {
		init: function() {
			this.bindEvents();
		},

		bindEvents: function() {
			window.addEventListener('load', this.resize.bind(this));
			window.addEventListener('resize', this.resize.bind(this));

			$control.addEventListener('click', this.click.bind(this));
		},

		click: function(event) {
			event.preventDefault();

			this.toggle($control.getAttribute('aria-expanded') !== 'true');
		},

		resize: function(event) {
			var isHidden = window.matchMedia('(min-width: 50em)').matches;

			$control[isHidden ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
			this.toggle(isHidden);
		},

		toggle: function(value) {
			$control.setAttribute('aria-expanded', value);
			$region[!value ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
		}
	};
})();