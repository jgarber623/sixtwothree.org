//= require routerrouter
//= require_tree ./modules

;(function() {
	new RouterRouter().route(/links|posts/, function() {
		new Pagination().init();
	});
})();