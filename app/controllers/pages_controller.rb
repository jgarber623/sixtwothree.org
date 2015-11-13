class PagesController < ApplicationController
  def homepage
    @links = FrancisCms::Link.recently_published
    @photos = FrancisCms::Photo.recently_published
    @posts = FrancisCms::Post.recently_published
  end
end
