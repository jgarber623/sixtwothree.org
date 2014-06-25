module Jekyll
  class TagPage < Page
    def initialize(site, base, dir, data = {})
      @site = site
      @base = base
      @dir  = dir
      @name = 'index.html'

      data['layout'] = 'tag'
      data['title'] = "Posts tagged “#{data['tag']}”"

      self.data = data

      self.process(@name)
    end

    def read_yaml(*)
      # Do nothing
    end
  end

  class TagPageGenerator < Generator
    safe true

    def generate(site)
      site.tags.each do |tag, posts|
        site.pages << TagPage.new(site, site.source, File.join('tags', tag), { 'tag' => tag, 'posts' => posts })
      end
    end
  end
end