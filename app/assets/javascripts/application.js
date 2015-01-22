//= require routerrouter
//= require_tree ./modules

(function() {
	var router = new RouterRouter();

	router.route(/posts|links/, function() {
		new Pagination();
	});
})();