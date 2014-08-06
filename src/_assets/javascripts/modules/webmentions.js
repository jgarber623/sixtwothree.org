(function(root, factory) {
 	root.Webmentions = factory();
}(this, function() {
 	var Webmentions = function(options) {
 		this.options = options;

 		this.init();
 	};

 	Webmentions.prototype = {
 		init: function() {
 			this.setVars();

 			this._get(this.options.endpoint + '?' + this._objectToUrlParams(this.options.params), this.processMentions);
 		},

 		appendMention: function(mention) {
 			this.$mentionAnchor.setAttribute('href', mention.source);
 			this.$mentionAnchor.textContent = mention.source;

 			var date = new DateFormatter(mention.created_at);

 			this.$mentionTime.setAttribute('datetime', date.toIso8601());
 			this.$mentionTime.innerHTML = date.toFormattedString();

 			this.$mentionsList.appendChild(document.importNode(this.mentionTemplateContent, true));
 		},

 		mentionIsVerified: function(mention) {
 			return mention.verified_at !== null;
 		},

 		processMentions: function() {
 			var request = this.request,
 				response = [];

 			if (request.status === 200) {
 				response = request.response;
 			} else if (request.contentType == 'application/json') {
 				response = request.responseText;
 			}

 			var mentions = JSON.parse(response).filter(this.mentionIsVerified);

 			if (mentions.length) {
 				this.setTemplateVars();

 				mentions.forEach(this.appendMention, this);

 				this.$post.insertBefore(this.containerTemplateContent, this.$postFooter);
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
 		},

 		setVars: function() {
 			this.request = ('withCredentials' in new XMLHttpRequest()) ? new XMLHttpRequest() : new XDomainRequest();

 			this.$post = document.querySelector('#main .post--single');
 			this.$postFooter = this.$post.querySelector('.post-footer');
 		},

 		_get: function(url, callback) {
 			var request = this.request;

 			request.onload = callback.bind(this);

 			request.open('GET', url);
 			request.send();
 		},

 		_objectToUrlParams: function(obj) {
 			return Object.keys(obj).map(function(key) {
 				return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
 			}).join('&');
 		}
 	};

 	return Webmentions;
 }));