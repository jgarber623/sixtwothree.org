set :stages, %w(production)
set :default_stage, 'production'
require 'capistrano/ext/multistage'

set :application, 'sixtwothree.org'

set :keep_releases, 3
set :scm, :git
set :repository, 'git@github.com:jgarber623/sixtwothree.org.git'
set :ssh_options, {:forward_agent => true}

set :deploy_via, :remote_cache
set :use_sudo, false