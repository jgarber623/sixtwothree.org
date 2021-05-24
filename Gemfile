ruby '2.4.9'

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'breakpoint', '~> 2.7'
gem 'francis_cms', github: 'FrancisCMS/FrancisCMS', ref: 'e629c98'
# gem 'francis_cms', path: '~/Developer/FrancisCMS'
gem 'puma', '~> 4.3'
gem 'sass-rails', '~> 6.0', '>= 6.0.0'
gem 'uglifier', '~> 4.2'

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible', '~> 2.2'
  gem 'rails-assets-cashcash', '~> 0.2'
  gem 'rails-assets-routerrouter', '~> 1.0'
end

group :development, :test do
  gem 'brakeman', require: false
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
end

group :development do
  gem 'bcrypt_pbkdf' # https://github.com/net-ssh/net-ssh/issues/565
  gem 'capistrano', '~> 3.16', require: false
  gem 'capistrano-chruby', '~> 0.1.2', require: false
  gem 'capistrano-rails', '~> 1.6', require: false
  gem 'ed25519' # https://github.com/net-ssh/net-ssh/issues/565
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'quiet_assets'
  gem 'svgeez', '~> 3.2'
end

group :test do
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
  gem 'simplecov_json_formatter', require: false
end
