;(function() {
	var PostForm = window.PostForm = function($el) {
		this.$el = $el;
	};

	PostForm.prototype = {
		init: function() {
			this.$title = document.getElementById('post_title');
			this.$slug = document.getElementById('post_slug');

			if (!this.$slug.value) {
				this.$title.addEventListener('keyup', this.keyup.bind(this));
			}
		},

		keyup: function(event) {
			setTimeout(function() {
				var val = this.$title.value;

				if (val) {
					this.$slug.value = val.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9\-]/g, '');
				}
			}.bind(this), 500);
		}
	};
}());