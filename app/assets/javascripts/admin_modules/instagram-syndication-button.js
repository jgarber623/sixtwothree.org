(function($) {
	'use strict';

	window.InstagramSyndicationButton = function() {
		var $firstListItem = $('.automated-syndications-container ul li:first-child')[0];

		if ($firstListItem) {
			var $listItem = document.createElement('li'),
				$button = document.createElement('button'),
				buttonText = 'Post to Instagram';

			var handleClick = function(event) {
				event.preventDefault();

				location.href = 'workflow://run-workflow?name=' + encodeURIComponent(buttonText) + '&input=text&text=' + encodeURIComponent(location.href);
			}

			$listItem.setAttribute('data-syndicate-to', 'instagram');

			$button.setAttribute('type', 'button');
			$button.innerHTML = buttonText;

			$button.addEventListener('click', handleClick);

			$listItem.appendChild($button)
			$firstListItem.insertAdjacentElement('afterend', $listItem);
		}
	};
})(CashCash);
