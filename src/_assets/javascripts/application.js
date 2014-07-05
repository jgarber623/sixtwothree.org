require(['vendor/routerrouter'], function(RouterRouter) {
	var router = new RouterRouter({
		routes: {
			'blog/:slug': 'post'
		},

		post: function() {
			require(['modules/mentions'], function(Mentions) {
				new Mentions({
					endpoint: 'http://webmention.sixtwothree.org/api/webmentions',
					params: {
						'target': location.href
					}
				});
			});
		}
	});
});