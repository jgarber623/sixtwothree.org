(function(window) {
	'use strict';

	var $container = document.querySelector('.admin-panel-container');

	var AdminPanel = window.AdminPanel = function() {};

	AdminPanel.prototype = {
		init: function() {
			var $control = this.$control = $container.querySelector('.admin-panel-control'),
				$region = this.$region = $container.querySelector('.admin-panel');

			$control.setAttribute('aria-controls', 'admin-panel');
			$control.setAttribute('aria-expanded', false);
			$control.removeAttribute('aria-hidden');

			$region.setAttribute('id', 'admin-panel');
			$region.setAttribute('aria-hidden', true);
			$region.setAttribute('tabindex', -1);

			this.bindEvents();

			$container.classList.add('fixed');
		},

		bindEvents: function() {
			window.addEventListener('keyup', this.keyup.bind(this));

			this.$control.addEventListener('click', this.click.bind(this));
		},

		click: function(event) {
			event.preventDefault();

			this.toggle(this.$control.getAttribute('aria-expanded') !== 'true');
		},

		keyup: function(event) {
			if (event.ctrlKey && event.which === 65) {
				this.toggle(this.$control.getAttribute('aria-expanded') !== 'true');
			}
		},

		toggle: function(value) {
			this.$control.setAttribute('aria-expanded', value);
			this.$region[!value ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);

			if (value) {
				this.$region.focus();
			}
		}
	};
})(window);