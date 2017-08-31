xml.instruct! :xml, version: 1.0
# rubocop:disable Metrics/BlockLength
xml.rss version: 2.0, 'xmlns:atom': 'http://www.w3.org/2005/Atom' do
  xml.channel do
    xml.title "#{t('site.name')}: Articles"
    xml.tag! :'atom:link', rel: 'self', href: articles_url(format: :rss)
    xml.link articles_url
    xml.description t('site.description')
    xml.pubDate @articles.first.published_at.to_formatted_s(:rfc822)
    xml.managingEditor "#{t('site.user.email')} (#{t('site.user.name')})"
    xml.webMaster "#{t('site.user.email')} (#{t('site.user.name')})"
    xml.language I18n.locale.to_s
    xml.copyright t('site.license.name')

    @articles.each do |article|
      xml.item do
        xml.guid article_url(article)
        xml.title article.title.smarten
        xml.link article_url(article)
        xml.pubDate article.published_at.to_formatted_s(:rfc822)

        xml.description do
          xml.cdata! article.content.to_html
        end

        if article.tags.any?
          article.sorted_tags.each do |tag|
            xml.category tag.name
          end
        end
      end
    end
  end
end
# rubocop:enable Metrics/BlockLength
