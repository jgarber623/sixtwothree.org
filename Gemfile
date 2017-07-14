ruby '2.4.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

source 'https://rubygems.org' do
  gem 'acts-as-taggable-on', '~> 5.0'
  gem 'friendly_id', '~> 5.2', '>= 5.2.1'
  gem 'geocoder', '~> 1.4', '>= 1.4.4'
  gem 'jbuilder', '~> 2.7'
  gem 'pg', '~> 0.21.0'
  gem 'puma', '~> 3.9', '>= 3.9.1'
  gem 'que', '~> 0.13.1'
  gem 'rails', '~> 5.1', '>= 5.1.2'
  gem 'redcarpet', '~> 3.4'
  gem 'rouge', '~> 2.1', '>= 2.1.1'
  gem 'sass-rails', '~> 5.0', '>= 5.0.6'
  gem 'uglifier', '~> 3.2'
  gem 'will_paginate', '~> 3.1', '>= 3.1.6'

  group :development, :test do
    gem 'byebug', '~> 9.0', '>= 9.0.6'
    gem 'foreman', '~> 0.84.0', require: false
    gem 'rails-controller-testing', '~> 1.0', '>= 1.0.2'
    gem 'rspec-rails', '~> 3.6'
    gem 'rubocop', '~> 0.49.1', require: false
  end

  group :development do
    gem 'web-console', '~> 3.5', '>= 3.5.1'
  end

  group :test do
    gem 'factory_girl_rails', '~> 4.8'
    gem 'simplecov', '~> 0.14.1', require: false
    gem 'simplecov-console', '~> 0.4.2', require: false
  end
end
