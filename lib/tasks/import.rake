namespace :import do
  desc 'Import links from a JSON file'
  task links: :environment do
    puts 'Enter path to JSON file:'

    links_file_path = File.expand_path($stdin.gets.chomp!)
    links = JSON.parse(File.open(links_file_path, 'r'))

    puts %(Importing links from `#{links_file_path}`...)

    links.each do |link|
      puts %(Importing `#{link['url']}`...)

      FrancisCms::Link.new(
        url: link['url'],
        title: link['title'],
        body: link['comment'],
        tag_list: link['tags'],
        published_at: link['add_date']
      ).save!

      sleep(1)
    end
  end

  desc 'Import posts from a folder of Markdown files'
  task posts: :environment do
    puts 'Enter path to posts folder:'

    posts_folder_path = File.expand_path($stdin.gets.chomp!)
    filepaths = Dir.glob(File.join(posts_folder_path, '*.md')).sort!

    puts %(Importing posts from `#{posts_folder_path}`...)

    filepaths.each do |filepath|
      yaml = YAML.load_file(filepath)

      puts %(Importing `#{yaml['title']}`...)

      post = FrancisCms::Post.new(
        body: IO.read(filepath).split("\n---\n\n")[1..-1].join("\n---\n\n"),
        published_at: yaml['date'],
        slug: /\d{4}-\d{2}-\d{2}-(.+?).md/.match(filepath)[1],
        title: yaml['title']
      )

      post.excerpt = yaml['excerpt'] unless yaml['excerpt'].nil?
      post.tag_list = yaml['tags'].join(', ') unless yaml['tags'].nil?

      # rubocop:disable Style/SafeNavigation
      unless yaml['copies'].nil?
        yaml['copies'].each do |copy|
          post.syndications.new(
            name: copy['title'],
            url: copy['url']
          )
        end
      end
      # rubocop:enable Style/SafeNavigation

      post.save!

      sleep(1)
    end
  end

  desc 'Import webmentions from a JSON file'
  task webmentions: :environment do
    puts 'Enter path to JSON file:'

    webmentions_file_path = File.expand_path($stdin.gets.chomp!)
    webmentions = JSON.parse(File.open(webmentions_file_path, 'r'))

    puts %(Importing webmentions from `#{webmentions_file_path}`...)

    webmentions.each do |webmention|
      puts %(Importing `#{webmention['source']}`...)

      FrancisCms::Webmention.new(
        source: webmention['source'],
        target: webmention['target'],
        created_at: webmention['created_at']
      ).save!

      sleep(1)
    end
  end
end
