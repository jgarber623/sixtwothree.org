module ActionView::Helpers::AssetTagHelper
  def stylesheet_link_tag(*sources)
    options = sources.extract_options!.stringify_keys
    path_options = options.extract!('protocol').symbolize_keys

    sources.uniq.map { |source|
      tag_options = {
        rel: 'stylesheet',
        href: path_to_stylesheet(source, path_options)
      }.merge!(options)
      tag(:link, tag_options)
    }.join("\n").html_safe
  end
end
