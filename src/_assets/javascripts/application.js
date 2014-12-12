//= require polyfills/template
//= require vendor/routerrouter
//= require_tree ./modules

(function() {
	var router = new RouterRouter();

	router.route('posts/:slug', function() {
		new Webmentions({
			container: document.querySelector('#responses'),
			endpoint: 'http://webmention.sixtwothree.org/api/webmentions',
			params: {
				'target': location.href.replace(location.hash, '')
			}
		});
	});
})();