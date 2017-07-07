json.type ['h-entry', 'h-as-article']

json.properties do
  json.name [article.title.smarten]
  json.summary [article.summary.smarten] if article.summary?

  json.content [article.content] do |content|
    json.html content.to_html
    json.value content.to_s
  end

  json.published [article.published_at.to_s(:iso8601)] if article.published_at?
  json.updated [article.updated_at.to_s(:iso8601)]
  json.category article.sorted_tags.map(&:name) if article.tags.any?
  json.url [article_url(article)]

  if article.location
    json.location [article.location] do |location|
      json.partial! 'location', location: location
    end
  end

  json.syndication article.sorted_syndications.map(&:url) if article.syndications.any?
end
