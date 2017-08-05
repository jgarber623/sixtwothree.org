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
    @results ||= Article.published.reverse_order.tagged_with(tag)
  end

  def tag
    @tag ||= ActsAsTaggableOn::Tag.find_or_create_with_like_by_name(params[:id].tr('-', ' '))
  end

  def tags
    @tags ||= ActsAsTaggableOn::Tag.all.order('lower(name) ASC')
  end
end
