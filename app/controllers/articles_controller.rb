class ArticlesController < ApplicationController
  def index
    articles
  end

  def show
    article
  end

  private

  def articles
    @articles ||= Article.order('created_at DESC').page(params[:page])
  end

  def article
    @article ||= Article.find(params[:id])
  end
end
