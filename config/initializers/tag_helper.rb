module ActionView
  module Helpers
    module TagHelper
      def tag(name, options = nil, open = true, escape = true)
        "<#{name}#{tag_options(options, escape) if options}#{open ? '>' : ' />'}".html_safe
      end

      def boolean_tag_option(key)
        key
      end
    end
  end
end
