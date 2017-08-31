module ApplicationHelper
  def page_title
    return "#{@page_title} — #{t('site.name')}" if @page_title
    "#{t('site.name')} — #{t('site.description')}"
  end

  def rss_link_tag(options)
    tag.link(
      href: options[:href],
      rel: 'alternate',
      title: options[:title],
      type: ActionView::Template::Types[:rss].to_s
    )
  end
end
