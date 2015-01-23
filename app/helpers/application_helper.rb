module ApplicationHelper
  def page_description
    @page_description || francis_cms_config.site_description
  end

  def page_title
    return "#{@page_title} — #{francis_cms_config.site_title}" if @page_title
    "#{francis_cms_config.site_title} — #{francis_cms_config.site_description}"
  end

  def include_full_css?
    cookies.has_key?(:fullCSS)
  end
end
