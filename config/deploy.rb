set :stages, %w(production)
set :default_stage, 'production'

require 'bundler/capistrano'
require 'capistrano/ext/multistage'

set :application, 'sixtwothree.org'

set :repository, 'git@github.com:jgarber623/sixtwothree.org.git'
set :deploy_via, :remote_cache
set :ssh_options, {forward_agent: true}
set :use_sudo, false

set :ruby_version, '2.1.1'
set :bundle_cmd, "chruby-exec #{ruby_version} -- bundle"

default_run_options[:shell] = '/bin/bash'

after :deploy, 'deploy:build_site', 'deploy:cleanup'

namespace :deploy do
  task :finalize_update do
    # Override default deploy:finalize_update task
  end

  task :build_site do
    run "cd #{release_path} && #{bundle_cmd} exec jekyll build --config config/jekyll.yml"
  end

  task :restart do
    # Override default deploy:restart task
  end
end