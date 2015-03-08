;(function(root, factory) {
	root.PostForm = factory();
}(this, function() {
	var PostForm = function($el) {
		this.$el = $el;
		this.$title = document.getElementById('post_title');
		this.$slug = document.getElementById('post_slug');
	};

	PostForm.prototype.init = function() {
		if (!this.$slug.value) {
			this.$title.addEventListener('keyup', this.keyup.bind(this));
		}
	};

	PostForm.prototype.keyup = function(event) {
		setTimeout(function() {
			var val = this.$title.value;

			if (val) {
				this.$slug.value = val.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9\-]/g, '');
			}
		}.bind(this), 500);
	};

	return PostForm;
}));