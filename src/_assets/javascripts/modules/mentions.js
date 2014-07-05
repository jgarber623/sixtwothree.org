define('modules/mentions', ['vendor/dateformatter'], function(DateFormatter) {
	var Mentions = function(options) {
		this.options = options;

		this.init();
	};

	Mentions.prototype = {
		init: function() {
			this.setVars();

			this._get(this.options.endpoint + '?' + this._objectToUrlParams(this.options.params), this.processMentions);
		},

		appendMention: function(mention) {
			if (mention.verified_at !== null) {
				this.$mentionAnchor.setAttribute('href', mention.source);
				this.$mentionAnchor.textContent = mention.source;

				var date = new DateFormatter(mention.created_at);

				this.$mentionTime.setAttribute('datetime', date.toIso8601());
				this.$mentionTime.innerHTML = date.toFormattedString();

				this.$mentionsList.appendChild(document.importNode(this.mentionTemplateContent, true));
			}
		},

		processMentions: function() {
			if (this.xhr.status === 200) {
				var mentions = JSON.parse(this.xhr.response);

				if (mentions.length) {
					this.setTemplateVars();

					mentions.forEach(this.appendMention, this);

					this.$post.insertBefore(this.containerTemplateContent, this.$postFooter);
				}
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
			this.xhr = new XMLHttpRequest();

			this.$post = document.querySelector('#main .post--single');
			this.$postFooter = this.$post.querySelector('.post-footer');
		},

		_get: function(url, callback) {
			this.xhr.onload = callback.bind(this);

			this.xhr.open('GET', url);
			this.xhr.send();
		},

		_objectToUrlParams: function(obj) {
			return Object.keys(obj).map(function(key) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
			}).join('&');
		}
	};

	return Mentions;
});