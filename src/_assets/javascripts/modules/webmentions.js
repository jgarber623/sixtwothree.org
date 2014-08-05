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
 			var response = [];

 			if (this.request.status === 200) {
 				response = this.request.response;
 			} else if (this.request.contentType == 'application/json') {
 				response = this.request.responseText;
 			}

 			var mentions = JSON.parse(response).filter(this.mentionIsVerified);

 			if (mentions.length) {
 				this.setTemplateVars();

 				mentions.forEach(this.appendMention, this);

 				this.$post.insertBefore(this.containerTemplateContent, this.$postFooter);
 			}
 		},

 		setTemplateVars: function() {
 			this.containerTemplate = document.querySelector('#template--mentions');
 			this.containerTemplateContent = this.containerTemplate.content;

 			this.mentionTemplate = document.querySelector('#template--mention');
 			this.mentionTemplateContent = this.mentionTemplate.content;

 			this.$mentionsList = this.containerTemplateContent.querySelector('.mentions-list');
 			this.$mentionAnchor = this.mentionTemplateContent.querySelector('a');
 			this.$mentionTime = this.mentionTemplateContent.querySelector('time');
 		},

 		setVars: function() {
 			this.supportsCors = 'withCredentials' in new XMLHttpRequest();
 			this.request = this.supportsCors ? new XMLHttpRequest() : new XDomainRequest();

 			this.$post = document.querySelector('#main .post--single');
 			this.$postFooter = this.$post.querySelector('.post-footer');
 		},

 		_get: function(url, callback) {
 			this.request.onload = callback.bind(this);

 			this.request.open('GET', url);
 			this.request.send();
 		},

 		_objectToUrlParams: function(obj) {
 			return Object.keys(obj).map(function(key) {
 				return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
 			}).join('&');
 		}
 	};

 	return Webmentions;
 }));