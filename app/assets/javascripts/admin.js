//= require aria-collapsible
//= require cashcash
//= require routerrouter
//= require_tree ./admin_modules

(function($) {
	'use strict';

	// Initialize a new router…
	var router = new RouterRouter();

	// Enhance admin panel…
	new AdminPanel();

	// Enhance confirmation forms…
	$('form[data-confirm]').toArray().forEach(function($form) {
		new FormConfirmation($form);
	});

	// Enhance link editing form…
	router.route(/links\/new/, function() {
		new LinkForm();
	});

	// Enhance post editing form…
	router.route(/posts\/(?:.+?\/edit|new)/, function() {
		new PostForm();
	});

	// Enhance syndication form…
	router.route(/\/edit$/, function() {
		new SyndicationForm();
	});
})(CashCash);