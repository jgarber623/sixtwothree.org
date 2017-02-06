class ArticlesController < ApplicationController
  def index
    articles
  end

  def show
    article
  end

  private

  def articles
    @articles ||= Article.published.page(params[:page])
  end

  def article
    @article ||= Article.published.find(params[:id])
  end
end
