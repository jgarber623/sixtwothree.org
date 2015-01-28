//= require routerrouter
//= require_tree ./admin

;(function() {
	new RouterRouter().route(/(?:links|posts|webmentions)(?:\/.+)?/, function() {
		var forms = document.querySelectorAll('.delete-form');

		for (var i = 0, j = forms.length; i < j; i++) {
			new DeleteForm(forms[i]).init();
		}
	});
})();