module ApplicationHelper
  def page_card_type
    @photo ? 'summary_large_image' : 'summary'
  end

  def page_description
    @page_description || francis_cms_config.site_description
  end

  def page_image
    @photo.try(:photo).try(:file) ? @photo.photo.url(:medium_jpg) : francis_cms_config.user_avatar
  end

  def page_title
    return "#{@page_title} — #{francis_cms_config.site_title}" if @page_title
    "#{francis_cms_config.site_title} — #{francis_cms_config.site_description}"
  end

  def css_is_cached?
    cookies.has_key?(:cssIsCached)
  end
end
