;(function() {
	var Entry = window.Entry = function($el) {
		this.$el = $el;
	};

	Entry.prototype = {
		init: function() {
			var $title = this.$el.querySelector('.entry-title');

			if ($title) {
				var $shim = document.createElement('i');

				$shim.innerHTML = '<svg role="img" version="1.1"><use xlink:href="#icons-' + this.$el.getAttribute('data-entry-type') + '"></svg>';
				$title.parentNode.insertBefore($shim, $title);
			}
		}
	};
}());