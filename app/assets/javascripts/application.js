//= require routerrouter
//= require_tree ./modules

;(function() {
	new RouterRouter().route(/links|posts/, function() {
		var $pagination = document.querySelector('.pagination');

		if ($pagination) {
			new Pagination($pagination).init();
		}
	});
})();