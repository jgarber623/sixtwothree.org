;(function() {
	var AdminPanel = window.AdminPanel = function($el) {
		this.$el = $el;
	};

	AdminPanel.prototype = {
		init: function() {
			var $control = this.$control = this.$el.querySelector('.admin-panel-control'),
				$region = this.$region = this.$el.querySelector('.admin-panel');

			$control.setAttribute('aria-controls', 'admin-panel');
			$control.setAttribute('aria-expanded', false);
			$control.removeAttribute('aria-hidden');

			$region.setAttribute('id', 'admin-panel');
			$region.setAttribute('aria-hidden', true);
			$region.setAttribute('tabindex', -1);

			this.bindEvents();

			this.$el.classList.add('fixed');
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
}());