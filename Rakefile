# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require 'rubocop/rake_task'

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

RuboCop::RakeTask.new do |task|
  task.options << '--display-cop-names'
  task.options << '--rails'
end
