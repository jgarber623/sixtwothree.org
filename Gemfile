ruby '2.4.9'

source 'https://rubygems.org'

git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'breakpoint', '~> 2.7'
gem 'francis_cms', github: 'FrancisCMS/FrancisCMS', ref: 'be56a63'
# gem 'francis_cms', path: '~/Developer/FrancisCMS'
gem 'puma', '~> 2.16'
gem 'sass-rails', '~> 6.0', '>= 6.0.0'
gem 'uglifier', '~> 4.2'

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible', '~> 2.2'
  gem 'rails-assets-cashcash', '~> 0.1'
  gem 'rails-assets-routerrouter', '~> 1.0'
end

group :development, :test do
  gem 'brakeman', '~> 4.8', require: false
  gem 'rspec-rails', '~> 3.9', '>= 3.9.1'
  gem 'rubocop', '~> 0.83.0', require: false
  gem 'rubocop-performance', '~> 1.5', require: false
  gem 'rubocop-rails', '~> 2.5', require: false
  gem 'rubocop-rspec', '~> 1.39', require: false
end

group :development do
  gem 'bcrypt_pbkdf', '~> 1.0' # https://github.com/net-ssh/net-ssh/issues/565
  gem 'capistrano', '~> 3.12', require: false
  gem 'capistrano-chruby', '~> 0.1.2', require: false
  gem 'capistrano-rails', '~> 1.4', require: false
  gem 'ed25519', '~> 1.2' # https://github.com/net-ssh/net-ssh/issues/565
  gem 'pry-byebug', '~> 3.9'
  gem 'pry-rails', '~> 0.3.9'
  gem 'quiet_assets', '~> 1.1'
  gem 'svgeez', '~> 3.1'
end

group :test do
  gem 'simplecov', '~> 0.18.5', require: false
  gem 'simplecov-console', '~> 0.7.2', require: false
end
