json.items @articles do |article|
  json.partial! 'article', article: article
end

if @articles.total_pages > 1
  json.rels do
    json.next [articles_url(format: :json, page: @articles.current_page + 1)] if @articles.current_page < @articles.total_pages
    json.prev [articles_url(format: :json, page: @articles.current_page - 1)] if @articles.current_page > 1
  end
end
