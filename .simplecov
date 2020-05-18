require 'simplecov-console'

formatters = [SimpleCov::Formatter::HTMLFormatter]

# rubocop:disable Style/IfUnlessModifier
if RSpec.configuration.files_to_run.length > 1
  formatters << SimpleCov::Formatter::Console
end
# rubocop:enable Style/IfUnlessModifier

SimpleCov.start 'rails' do
  coverage_dir 'tmp/coverage'

  formatter SimpleCov::Formatter::MultiFormatter.new(formatters)
end
