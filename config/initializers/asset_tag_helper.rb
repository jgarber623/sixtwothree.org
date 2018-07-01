module ActionView
  module Helpers
    module AssetTagHelper
      # rubocop:disable Rails/OutputSafety
      def stylesheet_link_tag(*sources)
        options = sources.extract_options!.stringify_keys
        path_options = options.extract!('protocol').symbolize_keys

        tags = sources.uniq.map do |source|
          tag_options = {
            rel: 'stylesheet',
            href: path_to_stylesheet(source, path_options)
          }.merge!(options)

          tag(:link, tag_options)
        end

        tags.join("\n").html_safe
      end
      # rubocop:enable Rails/OutputSafety
    end
  end
end
