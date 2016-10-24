class LinksController < ApplicationController
  def fetch
    json = { success: false }

    if params.key?(:link) && params[:link].key?(:url)
      begin
        json[:success] = true
        json[:title] = source_page.try(:title)
        json[:tags] = categories.collect(&:to_s) if categories.any?
      rescue
      end
    end

    render json: json
  end

  private

  def categories
    @categories ||= Microformats2.parse(source_page.body).try(:entry).try(:categories)
  end

  def source_page
    @source_page ||= Mechanize.new.get(params[:link][:url])
  end
end
