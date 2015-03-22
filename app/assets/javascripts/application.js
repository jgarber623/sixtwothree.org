//= require routerrouter
//= require_tree ./modules

;(function(document) {
	// Modifying prototypes… ¯\_(Y O L O)_/¯
	NodeList.prototype.forEach = Array.prototype.forEach;

	// Initialize a new router…
	var Router = new RouterRouter();

	// Function for enhancing entries…
	var entries = function() {
		document.querySelectorAll('.entry').forEach(function($entry) {
			new Entry($entry).init();
		});
	};

	// Function for enhancing pagination…
	var pagination = function() {
		var $pagination = document.querySelector('.pagination');

		if ($pagination) {
			new Pagination($pagination).init();
		}
	};

	// Enhance global navigation…
	new Navigation(document.querySelector('.global-navigation')).init();

	// Enhance `/links` and `/posts` pages…
	Router.route(/(?:links|posts)\/?([A-Za-z0-9\-]+)?$/, function() {
		entries();
		pagination();
	});

	// Enhance tag listing pages…
	Router.route('tags/:foo', function() {
		entries();
	});
})(document);