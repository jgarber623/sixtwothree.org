class TagsController < ApplicationController
  def index
    grouped_tags
  end

  def show
    tagged_articles
  end

  private

  def grouped_tags
    @grouped_tags ||= tags.group_by { |tag| tag.name.downcase.first }
  end

  def tag
    @tag ||= ActsAsTaggableOn::Tag.friendly.find(params[:id])
  end

  def tagged_articles
    @tagged_articles ||= Article.published.reverse_order.tagged_with(tag)
  end

  def tags
    @tags ||= ActsAsTaggableOn::Tag.all.order('lower(name) ASC')
  end
end
