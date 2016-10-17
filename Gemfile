ruby '2.2.4'

source 'https://rubygems.org' do
  # Application
  gem 'francis_cms', git: 'https://github.com/FrancisCMS/FrancisCMS.git'
  # gem 'francis_cms', path: '~/Projects/FrancisCMS'
  gem 'puma', '~> 2.15'

  # Assets
  gem 'breakpoint', '~> 2.7'
  gem 'sass-rails', '~> 5.0'
  gem 'uglifier', '~> 2.7'

  group :development do
    gem 'capistrano', '~> 3.4', require: false
    gem 'capistrano-chruby', '~> 0.1.2', require: false
    gem 'capistrano-rails', '~> 1.1', require: false
    gem 'foreman', '~> 0.82.0'
    gem 'pry', '~> 0.10.4'
    gem 'quiet_assets', '~> 1.1'
    gem 'svgeez', '~> 0.2.3'
  end

  group :development, :test do
    gem 'rspec-rails', '~> 3.5'
    gem 'rubocop', '~> 0.44.1', require: false
  end

  group :test do
    gem 'codeclimate-test-reporter', '~> 0.6.0', require: false
    gem 'simplecov', '~> 0.12.0', require: false
    gem 'simplecov-console', '~> 0.3.1', require: false
  end
end

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible'
  gem 'rails-assets-cashcash'
  gem 'rails-assets-fetch'
  gem 'rails-assets-html5shiv'
  gem 'rails-assets-respond'
  gem 'rails-assets-routerrouter'
end
