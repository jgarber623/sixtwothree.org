(function(root, factory) {
 	root.Webmentions = factory();
}(this, function() {
	var objectToUrlParams = function(obj) {
		return Object.keys(obj).map(function(key) {
			return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
		}).join('&');
	};

	var Likes = function(likes) {
		this.likes = likes;

		this.init();
	};

	Likes.prototype = {
		init: function() {
			this.templates = {
				container: document.querySelector('#template--likes').content,
				like: document.querySelector('#template--like').content
			};
		},

		render: function() {
			var list = this.templates.container.querySelector('.likes-list'),
				anchor = this.templates.like.querySelector('a'),
				img = this.templates.like.querySelector('img');

			this.likes.forEach(function(like) {
				var author = like.entry.properties.author[0].properties;

				anchor.setAttribute('href', author.url[0]);

				img.setAttribute('alt', author.name[0]);
				img.setAttribute('src', author.photo[0]);
				img.setAttribute('title', author.name[0] + ' likes this.');

				list.appendChild(document.importNode(this.templates.like, true));
			}, this);

			return this.templates.container;
		}
	};

 	var Webmentions = function(options) {
 		this.options = options;

 		this.init();
 	};

 	Webmentions.prototype = {
 		init: function() {
 			this.likes = [];
 			this.replies = [];
 			this.reposts = [];
 			this.responses = [];

 			this._get(this.options.endpoint + '?' + objectToUrlParams(this.options.params), this.processMentions.bind(this));
 		},

 		groupMentions: function(mention) {
 			switch (mention.webmention_type) {
 				case 'like':
 					this.likes.push(mention);
 					break;
 				case 'reply':
 					this.replies.push(mention);
 					break;
 				case 'repost':
 					this.reposts.push(mention);
 					break;
 				default:
 					this.responses.push(mention);
 			}
 		},

 		processMentions: function(response) {
 			var mentions = JSON.parse(response);

 			if (mentions.length) {
 				var nodes = [];

 				mentions.forEach(this.groupMentions, this);

 				if (this.likes.length) {
 					nodes.push(new Likes(this.likes).render());
 				}

 				this.render(nodes);
 			}
 		},

 		render: function(nodes) {
 			var container = document.querySelector('#responses');

 			nodes.forEach(function(node) {
 				container.appendChild(node);
 			});
 		},

 		_get: function(url, callback) {
 			var request = ('withCredentials' in new XMLHttpRequest()) ? new XMLHttpRequest() : new XDomainRequest(),
 				response = [];

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
 		}
 	};

 	return Webmentions;
 }));