//= require aria-collapsible
//= require routerrouter
//= require_tree ./admin_modules

(function() {
	'use strict';

	// Modifying prototypes… ¯\_(Y O L O)_/¯
	NodeList.prototype.forEach = Array.prototype.forEach;

	// Initialize a new router…
	var router = new RouterRouter();

	// Enhance admin panel…
	new AdminPanel().init();

	// Enhance confirmation forms…
	document.querySelectorAll('form[data-confirm]').forEach(function($form) {
		new FormConfirmation($form).init();
	});

	// Enhance link editing form…
	router.route(/links\/new/, function() {
		new LinkForm().init();
	});

	// Enhance post editing form…
	router.route(/posts\/(?:.+?\/edit|new)/, function() {
		new PostForm().init();
	});

	// Enhance syndication form…
	router.route(/\/edit$/, function() {
		new SyndicationForm().init();
	});
})();