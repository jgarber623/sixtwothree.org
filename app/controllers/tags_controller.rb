class TagsController < ApplicationController
  def index
    tags
  end

  def show
    tag
    results
  end

  private

  def results
    @results ||= Article.published.tagged_with(tag)
  end

  def tag
    @tag ||= params[:id]
  end

  def tags
    @tags ||= ActsAsTaggableOn::Tag.all.order('lower(name) ASC')
  end
end
