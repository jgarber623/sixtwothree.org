ruby '2.4.9'

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'breakpoint', '~> 2.7'
gem 'francis_cms', github: 'FrancisCMS/FrancisCMS', ref: '3c6e939'
# gem 'francis_cms', path: '~/Developer/FrancisCMS'
gem 'puma', '~> 6.4'
gem 'sass-rails', '~> 6.0', '>= 6.0.0'
gem 'uglifier', '~> 4.2'

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible', '~> 2.2'
  gem 'rails-assets-cashcash', '~> 0.2'
  gem 'rails-assets-routerrouter', '~> 1.0'
end

group :development, :test do
  gem 'dotenv-rails'
end

group :development do
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'quiet_assets'
  gem 'svgeez', '~> 3.2'
end

group :test do
  gem 'brakeman', require: false
  gem 'bundler-audit', require: false
  gem 'code-scanning-rubocop', require: false
  gem 'rspec-github', require: false
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
  gem 'simplecov_json_formatter', require: false
end
