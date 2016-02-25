ruby '2.2.4'

source 'https://rubygems.org' do
  # Application
  gem 'francis_cms', git: 'https://github.com/FrancisCMS/FrancisCMS.git'
  # gem 'francis_cms', path: '~/Projects/FrancisCMS'
  gem 'puma', '~> 2.15'

  # Assets
  gem 'breakpoint', '~> 2.5'
  gem 'sass-rails', '~> 5.0'
  gem 'uglifier', '~> 2.7'

  group :development do
    gem 'capistrano', '~> 3.4', require: false
    gem 'capistrano-chruby', '~> 0.1.2', require: false
    gem 'capistrano-rails', '~> 1.1', require: false
    gem 'foreman', '~> 0.78.0'
    gem 'pry', '~> 0.10.3'
    gem 'quiet_assets', '~> 1.1'
    gem 'svgeez', '~> 0.2.3'
  end
end

source 'https://rails-assets.org' do
  gem 'rails-assets-aria-collapsible'
  gem 'rails-assets-fetch'
  gem 'rails-assets-html5shiv'
  gem 'rails-assets-normalize-css'
  gem 'rails-assets-respond'
  gem 'rails-assets-routerrouter'
end
