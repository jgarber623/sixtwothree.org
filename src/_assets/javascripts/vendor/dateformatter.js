/*!
 *  DateFormatter 0.1.0
 *
 *  A small JavaScript library for formatting dates.
 *
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.DateFormatter = factory();
	}
}(this, function() {
	'use strict';

	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var DateFormatter = function(date) {
		this.date = date;
		this.dateObj = new Date(this.date);
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

		toFormattedString: function() {
			// Derived from http://stackoverflow.com/a/8888498
			var strtime = '',
				hours = this.dateObj.getHours(),
				minutes = this.dateObj.getMinutes(),
				meridian = hours < 12 ? 'am' : 'pm';

			hours = hours % 12;
			hours = hours ? hours : 12;

			strtime += months[this.dateObj.getMonth()] + ' ';
			strtime += this.dateObj.getDate() + '<sup>' + this.getOrdinal() + '</sup>, ';
			strtime += this.dateObj.getFullYear() + ' at ';
			strtime += hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + meridian + ' GMT';

			return strtime;
		},

		toIso8601: function() {
			return this.date.replace(/\.\d{3}Z$/, '+00:00');
		}
	};

	return DateFormatter;
}));