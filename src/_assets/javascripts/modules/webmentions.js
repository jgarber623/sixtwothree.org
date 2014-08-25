(function(root, factory) {
 	root.Webmentions = factory();
}(this, function() {
	var get = function(url, callback) {
		var request = ('withCredentials' in new XMLHttpRequest()) ? new XMLHttpRequest() : new XDomainRequest();

		request.onload = function() {
			if (request.status === 200) {
				response = request.response;
			} else if (request.contentType == 'application/json') {
				response = request.responseText;
			}

			callback(response);
		};

		request.open('GET', url);
		request.send();
	};

	var objectToUrlParams = function(obj) {
		return Object.keys(obj).map(function(key) {
			return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
		}).join('&');
	};

 	var Webmentions = function(options) {
 		this.options = options;

 		this.init();
 	};

 	Webmentions.prototype = {
 		init: function() {
 			get(this.options.endpoint + '?' + objectToUrlParams(this.options.params), this.processMentions.bind(this));
 		},

 		appendMention: function(mention) {
 			this.$mentionAnchor.setAttribute('href', mention.source);
 			this.$mentionAnchor.textContent = mention.source;

 			var date = new DateFormatter(mention.created_at);

 			this.$mentionTime.setAttribute('datetime', date.toIso8601());
 			this.$mentionTime.innerHTML = date.toFormattedString();

 			this.$mentionsList.appendChild(document.importNode(this.mentionTemplateContent, true));
 		},

 		processMentions: function(response) {
 			var mentions = JSON.parse(response);

 			if (mentions.length) {
 				this.setTemplateVars();

 				mentions.forEach(this.appendMention, this);

 				document.querySelector('#responses').appendChild(this.containerTemplateContent);
 			}
 		},

 		setTemplateVars: function() {
 			var containerTemplate = document.querySelector('#template--mentions'),
 				mentionTemplate = document.querySelector('#template--mention');

 			this.containerTemplateContent = containerTemplate.content;
 			this.mentionTemplateContent = mentionTemplate.content;

 			this.$mentionsList = this.containerTemplateContent.querySelector('.mentions-list');
 			this.$mentionAnchor = this.mentionTemplateContent.querySelector('a');
 			this.$mentionTime = this.mentionTemplateContent.querySelector('time');
 		}
 	};

 	return Webmentions;
 }));