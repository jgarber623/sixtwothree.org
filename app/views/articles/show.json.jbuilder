json.items [@article] do |article|
  json.partial! 'article', article: article
end
