//= require routerrouter
//= require_tree ./admin

;(function(document) {
	// Modifying prototypes… ¯\_(Y O L O)_/¯
	NodeList.prototype.forEach = Array.prototype.forEach;

	// Initialize a new router…
	var Router = new RouterRouter();

	// Enhance delete forms…
	Router.route(/(?:links|photos|posts|webmentions)(?:\/.+)?/, function() {
		var $forms = document.querySelectorAll('.delete-form');

		$forms.forEach(function($form) {
			new DeleteForm($form).init();
		});
	});

	// Enhance post editing form…
	Router.route(/posts\/(?:.+?\/edit|new)/, function() {
		var $form = document.querySelector('.post-form');

		new PostForm($form).init();
	});

	// Enhance link editing form…
	Router.route(/links\/new/, function() {
		var $form = document.getElementById('new_link');

		new LinkForm($form).init();
	});

	// Enhance syndication form…
	Router.route(/\/edit$/, function() {
		var $form = document.getElementById('new_syndication');

		new SyndicationForm($form).init();
	});
})(document);