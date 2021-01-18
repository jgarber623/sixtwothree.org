module ActionView
  module Helpers
    module TagHelper
      # rubocop:disable Rails/OutputSafety, Style/OptionalBooleanParameter
      def tag(name, options = nil, open = true, escape = true)
        "<#{name}#{tag_options(options, escape) if options}#{open ? '>' : ' />'}".html_safe
      end
      # rubocop:enable Rails/OutputSafety, Style/OptionalBooleanParameter

      def boolean_tag_option(key)
        key
      end
    end
  end
end
