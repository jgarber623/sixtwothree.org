class PagesController < ApplicationController
  def homepage
    @posts = FrancisCms::Post.recently_published
    @links = FrancisCms::Link.recently_published
  end
end
