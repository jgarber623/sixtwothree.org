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

after :deploy, 'deploy:after_deploy', 'deploy:cleanup'

namespace :deploy do
  task :after_deploy do
    `cd #{current_path}`
    `bundle`
    `bundle exec jekyll build --config config/jekyll.yml`
  end

  task :finalize_update do
    # Override default deploy:finalize_update task
  end

  task :restart do
    # Override default deploy:restart task
  end
end