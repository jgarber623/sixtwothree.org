//= require routerrouter
//= require_tree ./admin

;(function(document) {
	// Modifying prototypes… ¯\_(Y O L O)_/¯
	NodeList.prototype.forEach = Array.prototype.forEach;

	// Initialize a new router…
	var router = new RouterRouter();

	// Enhance delete forms…
	router.route(/(?:links|posts|webmentions)(?:\/.+)?/, function() {
		var $forms = document.querySelectorAll('.delete-form');

		$forms.forEach(function($form) {
			new DeleteForm($form).init();
		});
	});

	// Enhance syndication form…
	router.route(/\/edit$/, function() {
		var $forms = document.querySelectorAll('.syndication-form');

		$forms.forEach(function($form) {
			new SyndicationForm($form).init();
		});
	});
})(document);