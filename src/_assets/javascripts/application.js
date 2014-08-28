//= require polyfills/template
//= require vendor/routerrouter
//= require_tree ./modules

(function() {
	var router = new RouterRouter();

	router.route('blog/:slug', function() {
		new Webmentions({
			endpoint: 'http://webmention.sixtwothree.org/api/webmentions',
			params: {
				// 'target': location.href
			}
		});
	});
})();