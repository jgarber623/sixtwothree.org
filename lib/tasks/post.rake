require 'erb'

namespace :post do
  desc 'Create a new post'
  task :create do
    include Conversable;

    POSTS_PATH     = 'src/_posts'
    TEMPLATES_PATH = 'lib/templates'

    pubdate = Time.now

    title = ask?('What would you like to title your post?')

    filename = pubdate.strftime('%F') + '-' + title.downcase.gsub('’', '').gsub(/[^0-9A-Za-z]/i, '-').gsub(/-+/, '-').chomp('-')
    filepath = "#{POSTS_PATH}/#{filename}.md"

    File.open(filepath, 'w') do |f|
      f.write ERB.new(File.read("#{TEMPLATES_PATH}/post.md.erb")).result(binding)
    end

    `open #{filepath}`
  end
end

task :post => 'post:create'