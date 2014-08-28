(function(root, factory) {
	root.Responses = factory();
}(this, function() {
	var Responses = function(responses) {
		this.responses = responses;

		this.init();
	};

	Responses.prototype = {
		init: function() {
			this.containerTemplate = document.querySelector('#template--responses').content;
			this.referenceTemplate = document.querySelector('#template--reference').content;
			this.replyTemplate = document.querySelector('#template--reply').content;

			this.list = this.containerTemplate.querySelector('.responses-list');
		},

		render: function() {
			this.responses.sort(this.sort);

			this.responses.forEach(this.process, this);

			return this.containerTemplate;
		},

		process: function(response) {
			var type = response.webmention_type,
				entry = response.entry.properties,
				template = document.importNode(type === 'reply' ? this.replyTemplate : this.referenceTemplate, true),
				author = this.setAuthorData(response),
				avatar = template.querySelector('.avatar'),
				url = this.setUrl(response),
				published = new DateFormatter(this.setPublishedDate(response)),
				pubdate = template.querySelector('.pubdate');

			template.querySelector('.author').setAttribute('href', author.url);
			template.querySelector('.name').textContent = author.name;

			if (author.photo) {
				avatar.setAttribute('src', author.photo);
			} else {
				avatar.parentNode.removeChild(avatar);
			}

			pubdate.setAttribute('datetime', published.toIso8601());
			pubdate.innerHTML = published.toFormattedString();

			if (type === 'reply') {
				template.querySelector('.response-content p').innerHTML = entry.content[0].replace(/<p class="u-mention">.*<\/p>$/, '');

				template.querySelector('.permalink').setAttribute('href', url);
			} else {
				var title = template.querySelector('.title');

				title.setAttribute('href', url);
				title.textContent = entry.name[0];
			}

			this.list.appendChild(template);
		},

		setAuthorData: function(obj) {
			var author = obj.entry.properties.author,
				domain = obj.source.match(/^https?:\/\/(.[^\/]+)\//),
				data = {
					name: domain[1],
					url: domain[0]
				};

			if (typeof author !== 'undefined') {
				var name = author[0].properties.name,
					url = author[0].properties.url,
					photo = author[0].properties.photo;

				if (typeof name !== 'undefined') {
					data.name = name[0];
				}

				if (typeof url !== 'undefined') {
					data.url = this._normalizeUrl(url[0], obj.source);
				}

				if (typeof photo !== 'undefined') {
					data.photo = this._normalizeUrl(photo[0], obj.source);
				}
			}

			return data;
		},

		setPublishedDate: function(obj) {
			var published = obj.entry.properties.published;

			return typeof published !== 'undefined' ? published[0] : obj.created_at;
		},

		setUrl: function(obj) {
			var url = obj.entry.properties.url;

			return typeof url !== 'undefined' ? this._normalizeUrl(url[0], obj.source) : obj.source;
		},

		sort: function(a, b) {
			return new Date(a.entry.properties.published[0]) - new Date(b.entry.properties.published[0]);
		},

		_normalizeUrl: function(url, sourceUrl) {
			if (!/^https?:\/\//.test(url)) {
				url = sourceUrl.match(/^https?:\/\/(?:.[^\/]+)\//)[0].replace(/\/$/, url);
			}

			return url;
		}
	};

	return Responses;
}));