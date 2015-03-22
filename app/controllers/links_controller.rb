class LinksController < ApplicationController
  def fetch
    json = { success: false }

    if params[:url]
      agent = Mechanize.new

      begin
        source_page = agent.get(params[:url])
        collection = Microformats2.parse(source_page.body)

        json[:success] = true
        json[:title] = source_page.try(:title)

        if categories = collection.try(:entry).try(:categories)
          json[:tags] = categories.collect { |category| category.to_s }
        end
      rescue
      end
    end

    render json: json
  end
end
