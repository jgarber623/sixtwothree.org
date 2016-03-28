//= require aria-collapsible
//= require cashcash
//= require routerrouter
//= require_tree ./modules

(function($) {
	'use strict';

	// Initialize a new router…
	var router = new RouterRouter();

	// Function for enhancing entries…
	var entries = function() {
		$('.entry').toArray().forEach(function($entry) {
			new Entry($entry).init();
		});
	};

	// Enhance global navigation…
	new Navigation().init();

	// Enhance `/links`, `/photos`, `/posts`, and `/webmentions` pages…
	router.route(/(?:links|photos|posts|webmentions)(?:\/archives)?\/?(?:[A-Za-z0-9\-]+)?$/, function() {
		entries();
		new Pagination().init();
	});

	// Enhance tag listing pages…
	router.route('tags/:tag', function() {
		entries();
	});
})(CashCash);