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

  def google_fonts_url
    'https://fonts.googleapis.com/css?family=Open+Sans:700|Source+Sans+Pro:400,400italic,700'
  end

  def inline_asset(filename)
    output = ''

    if Rails.application.config.assets.compile
      output = Rails.application.assets.find_asset(filename).to_s
    else
      manifest = Rails.application.assets_manifest
      asset_path = manifest.assets[filename]

      unless asset_path.nil?
        output = File.read(Rails.root.join(manifest.directory, asset_path))
      end
    end

    output.html_safe
  end
end
