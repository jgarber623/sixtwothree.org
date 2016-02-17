//= require_tree ./admin_modules

(function() {
	'use strict';

	// Initialize a new router…
	var Router = new RouterRouter();

	// Enhance admin panel…
	new AdminPanel().init();

	// Enhance confirmation forms…
	document.querySelectorAll('form[data-confirm]').forEach(function($form) {
		new FormConfirmation($form).init();
	});

	// Enhance link editing form…
	Router.route(/links\/new/, function() {
		new LinkForm().init();
	});

	// Enhance post editing form…
	Router.route(/posts\/(?:.+?\/edit|new)/, function() {
		new PostForm().init();
	});

	// Enhance syndication form…
	Router.route(/\/edit$/, function() {
		new SyndicationForm().init();
	});
})();