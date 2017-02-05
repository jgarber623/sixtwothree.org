module ActionView
  module Helpers
    module AssetTagHelper
      def stylesheet_link_tag(*sources)
        options = sources.extract_options!.stringify_keys
        path_options = options.extract!('protocol', 'host').symbolize_keys

        # rubocop:disable Style/BlockDelimiters
        safe_join(sources.uniq.map { |source|
          tag_options = {
            rel: 'stylesheet',
            href: path_to_stylesheet(source, path_options)
          }.merge!(options)

          tag(:link, tag_options)
        }, "\n")
        # rubocop:enable Style/BlockDelimiters
      end
    end
  end
end
