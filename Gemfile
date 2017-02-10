ruby '2.4.0'

source 'https://rubygems.org' do
  gem 'acts-as-taggable-on', '~> 4.0'
  gem 'friendly_id', '~> 5.2'
  gem 'geocoder', '~> 1.4', '>= 1.4.3'
  # gem 'jbuilder', '~> 2.5'
  gem 'pg', '~> 0.19.0'
  gem 'puma', '~> 3.7'
  gem 'que', '~> 0.12.1'
  gem 'rails', '~> 5.0', '>= 5.0.1'
  gem 'redcarpet', '~> 3.4'
  gem 'rouge', '~> 2.0', '>= 2.0.7'
  gem 'sass-rails', '~> 5.0', '>= 5.0.6'
  gem 'uglifier', '~> 3.0', '>= 3.0.4'
  gem 'will_paginate', '~> 3.1', '>= 3.1.5'

  group :development, :test do
    gem 'byebug', '~> 9.0', '>= 9.0.6'
    gem 'foreman', '~> 0.83.0'
    gem 'rails-controller-testing', '~> 1.0', '>= 1.0.1'
    gem 'rspec-rails', '~> 3.5', '>= 3.5.2'
    gem 'rubocop', '~> 0.47.1', require: false
  end

  group :development do
    gem 'capistrano-chruby', '~> 0.1.2', require: false
    gem 'capistrano-rails', '~> 1.2', '>= 1.2.2', require: false
    # gem 'web-console', '>= 3.3.0'
  end

  group :test do
    gem 'codeclimate-test-reporter', '~> 1.0', '>= 1.0.5', require: false
    gem 'factory_girl_rails', '~> 4.8'
    gem 'simplecov', '~> 0.13.0', require: false
    gem 'simplecov-console', '~> 0.4.1', require: false
  end
end
