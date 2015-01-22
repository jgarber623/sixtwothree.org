//= require routerrouter
//= require_tree ./modules

(function() {
	var router = new RouterRouter();

	router.route(/links|posts/, function() {
		new Pagination();
	});
})();