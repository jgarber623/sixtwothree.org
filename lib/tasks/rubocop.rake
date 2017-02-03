require 'rubocop/rake_task'

RuboCop::RakeTask.new(:rubocop) do |task|
  task.options << '--display-cop-names'
  task.options << '--rails'
end
