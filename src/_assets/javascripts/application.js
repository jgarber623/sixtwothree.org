require(['vendor/routerrouter'], function(RouterRouter) {
	var router = new RouterRouter();

	router.route('blog/:slug', function() {
		require(['modules/mentions'], function(Mentions) {
			new Mentions({
				endpoint: 'http://webmention.sixtwothree.org/api/webmentions',
				params: {
					'target': location.href
				}
			});
		});
	});
});