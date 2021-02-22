ruby '2.4.9'

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'breakpoint', '~> 2.7'
gem 'francis_cms', github: 'FrancisCMS/FrancisCMS', ref: '8cfe67d'
# gem 'francis_cms', path: '~/Developer/FrancisCMS'
gem 'puma', '~> 3.12'
gem 'sass-rails', '~> 6.0', '>= 6.0.0'
gem 'uglifier', '~> 4.2'

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible', '~> 2.2'
  gem 'rails-assets-cashcash', '~> 0.2'
  gem 'rails-assets-routerrouter', '~> 1.0'
end

group :development, :test do
  gem 'brakeman', '~> 5.0', require: false
  gem 'rspec-rails', '~> 4.0'
  gem 'rubocop', '~> 1.10', require: false
  gem 'rubocop-performance', '~> 1.9', require: false
  gem 'rubocop-rails', '~> 2.9', require: false
  gem 'rubocop-rspec', '~> 2.2', require: false
end

group :development do
  gem 'bcrypt_pbkdf', '~> 1.1' # https://github.com/net-ssh/net-ssh/issues/565
  gem 'capistrano', '~> 3.15', require: false
  gem 'capistrano-chruby', '~> 0.1.2', require: false
  gem 'capistrano-rails', '~> 1.6', require: false
  gem 'ed25519', '~> 1.2' # https://github.com/net-ssh/net-ssh/issues/565
  gem 'pry-byebug', '~> 3.9'
  gem 'pry-rails', '~> 0.3.9'
  gem 'quiet_assets', '~> 1.1', '>= 1.1.0'
  gem 'svgeez', '~> 3.2'
end

group :test do
  gem 'simplecov', '~> 0.18.5', require: false
  gem 'simplecov-console', '~> 0.9.1', require: false
  gem 'simplecov_json_formatter', '~> 0.1.2', require: false
end
