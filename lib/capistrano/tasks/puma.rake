namespace :puma do
  [:restart, :start, :stop].each do |cmd|
    desc "#{cmd.capitalize} the application"
    task cmd => :environment do
      on roles(:app), in: :sequence, wait: 5 do
        execute "sudo /usr/sbin/service sixtwothree-org-puma #{cmd}"
      end
    end
  end
end
