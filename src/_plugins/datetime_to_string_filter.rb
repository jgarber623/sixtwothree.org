module Jekyll
  module DatetimeToStringFilter
    def datetime_to_string(input)
      input.strftime("%B #{ordinalize input.day}, %Y at %l:%M %P %Z")
    end

    def ordinalize(input)
      ordinal = case input
        when 1, 21, 31; 'st'
        when 2, 22;     'nd'
        when 3, 23;     'rd'
        else            'th'
      end

      "#{input}<sup>#{ordinal}</sup>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::DatetimeToStringFilter)