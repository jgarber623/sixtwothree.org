(function(root, factory) {
	root.DateFormatter = factory();
}(this, function() {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var DateFormatter = function(date) {
		this.date = date;
		this.dateObj = new Date(this.normalizeDateString());
	};

	DateFormatter.prototype = {
		getOrdinal: function() {
			var ordinal = 'th';

			switch(this.dateObj.getDate()) {
				case 1:
				case 21:
				case 31:
					ordinal = 'st';
					break;
				case 2:
				case 22:
					ordinal = 'nd';
					break;
				case 3:
				case 23:
					ordinal = 'rd';
					break;
			}

			return ordinal;
		},

		normalizeDateString: function() {
			return this.date.replace(/[+|-]\d{2}:\d{2}$/, '').replace(/-/g, '/').replace('T', ' ').replace(/\.\d{3}Z$/, '');
		},

		toFormattedString: function() {
			// Derived from http://stackoverflow.com/a/8888498
			var strtime = '',
				dateObj = this.dateObj,
				hours = dateObj.getHours(),
				minutes = dateObj.getMinutes(),
				meridian = hours < 12 ? 'am' : 'pm';

			hours = hours % 12;
			hours = hours ? hours : 12;

			strtime += months[dateObj.getMonth()] + ' ';
			strtime += dateObj.getDate() + '<sup>' + this.getOrdinal() + '</sup>, ';
			strtime += dateObj.getFullYear() + ' at ';
			strtime += hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + meridian + ' UTC';

			return strtime;
		},

		toIso8601: function() {
			return this.date.replace(/\.\d{3}Z$/, '+00:00');
		}
	};

	return DateFormatter;
}));