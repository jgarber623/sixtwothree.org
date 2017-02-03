namespace :puma do
  %w(restart start stop).each do |cmd|
    desc "#{cmd.capitalize} the application server"
    task cmd do
      on roles(:app), in: :sequence, wait: 5 do
        execute "sudo /usr/sbin/service sixtwothree-org-puma #{cmd}"
      end
    end
  end
end
