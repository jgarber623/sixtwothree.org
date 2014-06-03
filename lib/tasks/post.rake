require 'erb'
require 'slugify'

namespace :post do
  desc 'Create a new blog post'
  task :create do
    include Conversable;

    posts_path = 'src/blog/_posts'
    templates_path = 'lib/templates'

    pubdate = Time.now

    title = ask?('What would you like to title your blog post?')

    slug = title.slugify

    notify "This post's URL is currently `#{slug}`."

    if confirm?("Would you like to customize this post's URL? [yes/no]")
      custom_slug = ask?("What would you like this post's URL to be?").slugify

      slug = custom_slug.length > 0 ? custom_slug : slug
    end

    filename = "#{pubdate.strftime('%F')}-#{slug}"
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