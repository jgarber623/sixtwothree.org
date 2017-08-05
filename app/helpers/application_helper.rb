module ApplicationHelper
  def page_title
    return "#{@page_title} — #{t('site.name')}" if @page_title
    "#{t('site.name')} — #{t('site.description')}"
  end
end
