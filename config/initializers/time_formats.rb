Time::DATE_FORMATS[:long_ordinal] = ->(time) { time.strftime("%B %e<sup>#{time.day.ordinal}</sup>, %Y at %l:%M %P %Z") }
