class PagesController < ApplicationController
  def homepage
    @links = FrancisCms::Link.recently_published
    @photos = FrancisCms::Photo.recently_published
    @posts = FrancisCms::Post.recently_published
  end

  def sitemap
    @links = FrancisCms::Link.select('id')
    @photos = FrancisCms::Photo.select('id', 'body', 'photo')
    @posts = FrancisCms::Post.select('slug')
  end
end
