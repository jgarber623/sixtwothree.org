;(function() {
	var AdminPanel = window.AdminPanel = function($el) {
		this.$el = $el;
	};

	AdminPanel.prototype = {
		init: function() {
			this.$control = this.$el.querySelector('.admin-panel-control');
			this.$region = this.$el.querySelector('.admin-panel');

			this.$control.setAttribute('aria-controls', 'admin-panel');
			this.$control.setAttribute('aria-expanded', false);
			this.$control.removeAttribute('aria-hidden');

			this.$region.setAttribute('id', 'admin-panel');
			this.$region.setAttribute('aria-hidden', true);

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
		}
	};
}());