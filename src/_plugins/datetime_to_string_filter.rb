module Jekyll
  module DatetimeToStringFilter
    def datetime_to_string(input)
      input.strftime("%B #{ordinalize input.day}, %Y at %l:%M %P %Z")
    end

    def ordinalize(input)
      case input
        when 1, 21, 31; "#{input}<sup>st</sup>"
        when 2, 22;     "#{input}<sup>nd</sup>"
        when 3, 23;     "#{input}<sup>rd</sup>"
        else            "#{input}<sup>th</sup>"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::DatetimeToStringFilter)