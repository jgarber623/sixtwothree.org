ruby '2.2.4'

source 'https://rubygems.org'
source 'https://rails-assets.org'

# Application
gem 'francis_cms', git: 'https://github.com/FrancisCMS/FrancisCMS'
# gem 'francis_cms', path: '~/Developer/FrancisCMS'
gem 'puma', '~> 2.16'

# Assets
gem 'breakpoint', '~> 2.7', '>= 2.7.1'
gem 'sass-rails', '~> 5.0', '>= 5.0.7'
gem 'uglifier', '~> 4.1', '>= 4.1.20'

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible'
  gem 'rails-assets-cashcash'
  gem 'rails-assets-html5shiv'
  gem 'rails-assets-respond'
  gem 'rails-assets-routerrouter'
end

group :development do
  gem 'brakeman', '~> 4.3', '>= 4.3.1', require: false
  gem 'capistrano', '~> 3.11', require: false
  gem 'capistrano-chruby', '~> 0.1.2', require: false
  gem 'capistrano-rails', '~> 1.4', require: false
  gem 'foreman', '~> 0.85.0'
  gem 'pry', '~> 0.12.2'
  gem 'quiet_assets', '~> 1.1'
  gem 'svgeez', '0.2.3'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.8', '>= 3.8.1'
  gem 'rubocop', '~> 0.62.0', require: false
end

group :test do
  gem 'simplecov', '~> 0.16.1', require: false
  gem 'simplecov-console', '~> 0.4.2', require: false
end
