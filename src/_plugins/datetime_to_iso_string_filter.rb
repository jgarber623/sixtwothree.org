module Jekyll
  module DatetimeToIsoStringFilter
    def datetime_to_iso_string(input)
      input.strftime("%FT%T%:z")
    end
  end
end

Liquid::Template.register_filter(Jekyll::DatetimeToIsoStringFilter)