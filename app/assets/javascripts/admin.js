//= require_tree ./admin_modules

(function() {
	var forms = document.querySelectorAll('.delete-form');

	if (forms.length) {
		for (var i = 0, j = forms.length; i < j; i++) {
			new Destroyer(forms[i]);
		}
	}
})();