module Jekyll
  module DatetimeToStringFilter
    def datetime_to_string(input)
      input.strftime("%B %e, %Y at %l:%M %P %Z")
    end
  end
end

Liquid::Template.register_filter(Jekyll::DatetimeToStringFilter)