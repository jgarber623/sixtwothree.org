class ArticlesController < ApplicationController
  def index
    articles
  end

  def show
    article
  end

  private

  def article
    @article ||= Article.published.find(params[:id])
  end

  def articles
    @articles ||= Article.published.reverse_order.page(params[:page])
  end
end
