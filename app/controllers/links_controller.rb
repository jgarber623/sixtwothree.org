class LinksController < ApplicationController
  def fetch
    json = { success: false }

    if params[:url]
      agent = Mechanize.new

      begin
        source_page = agent.get(params[:url])

        json = { success: true, title: source_page.try(:title) }
      rescue
      end
    end

    render json: json
  end
end
