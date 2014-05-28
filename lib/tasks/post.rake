require 'erb'

namespace :post do
  desc 'Create a new blog post'
  task :create do
    include Conversable;

    posts_path = 'src/blog/_posts'
    templates_path = 'lib/templates'

    pubdate = Time.now

    title = ask?('What would you like to title your blog post?')

    filename = pubdate.strftime('%F') + '-' + title.downcase.gsub('’', '').gsub(/[^0-9A-Za-z]/i, '-').gsub(/-+/, '-').chomp('-')
    filepath = "#{posts_path}/#{filename}.md"

    if File.exists?(filepath)
      alert '! You already created a blog post today with that title. Try to be more unique.'
    else
      File.open(filepath, 'w') do |f|
        f.write ERB.new(File.read("#{templates_path}/post.md.erb")).result(binding)
      end

      `open #{filepath}`
    end
  end
end

task :post => 'post:create'