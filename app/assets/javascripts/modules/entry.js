;(function() {
	var Entry = window.Entry = function($el) {
		this.$el = $el;
	};

	Entry.prototype = {
		init: function() {
			var $title = this.$el.querySelector('.entry-title');

			if ($title) {
				var $shim = document.createElement('i');

				$shim.innerHTML = '<svg><use xlink:href="#icons-' + this.$el.getAttribute('data-entry-type') + '"></svg>';
				$title.parentNode.insertBefore($shim, $title);
			}
		}
	};
}());