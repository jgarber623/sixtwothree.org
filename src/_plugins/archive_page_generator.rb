module Jekyll
  class ArchiveIndexPage < Page
    def initialize(site, base, dir, data = {})
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html'

      data['layout'] = 'archive'
      data['title'] = 'Posts Archive'

      self.data = data

      process(@name)
    end

    def read_yaml(*)
      # Do nothing
    end
  end

  class ArchivePage < Page
    def initialize(site, base, dir, data = {})
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html'

      data['layout'] = 'posts-list'
      data['title'] = "Posts Archive: #{data['year']}"

      self.data = data

      process(@name)
    end

    def read_yaml(*)
      # Do nothing
    end
  end

  class ArchivePageGenerator < Generator
    safe true

    def generate(site)
      grouped_posts = posts_grouped_by_year(site)

      site.pages << ArchiveIndexPage.new(site, site.source, 'blog/archive', {'years' => grouped_posts.keys})

      grouped_posts.each do |year, posts|
        site.pages << ArchivePage.new(site, site.source, File.join('blog/archive', year.to_s), {'posts' => posts, 'year' => year})
      end
    end

    def posts_grouped_by_year(site)
      site.posts.group_by { |post| post.date.year }
    end
  end
end