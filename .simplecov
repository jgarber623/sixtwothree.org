require 'simplecov-console'

# formatters = [SimpleCov::Formatter::HTMLFormatter]
#
# if RSpec.configuration.files_to_run.length > 1
#   formatters << SimpleCov::Formatter::Console
# end

SimpleCov.start 'rails' do
  coverage_dir 'tmp/coverage'

  formatter SimpleCov::Formatter::MultiFormatter[
    SimpleCov::Formatter::HTMLFormatter,
    SimpleCov::Formatter::Console,
  ]
end
