;(function() {
	var Entry = window.Entry = function($el) {
		this.$el = $el;
	};

	Entry.prototype = {
		init: function() {
			var $shim = document.createElement('i'),
				$title = this.$el.querySelector('.entry-title');

			$shim.innerHTML = '<svg><use xlink:href="#icon-' + this.$el.getAttribute('data-entry-type') + '" /></svg>';

			$title.parentNode.insertBefore($shim, $title);
		}
	};
}());