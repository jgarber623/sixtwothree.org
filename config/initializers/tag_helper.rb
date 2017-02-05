module ActionView
  module Helpers
    module TagHelper
      def tag(name, options = nil, escape = true)
        # rubocop:disable Rails/OutputSafety
        "<#{name}#{tag_options(options, escape) if options}>".html_safe
        # rubocop:enable Rails/OutputSafety
      end

      private

      def boolean_tag_option(key)
        key
      end
    end
  end
end
