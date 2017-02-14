RSpec.describe ArticlesController, type: :request do
  describe 'GET #show' do
    let! :article do
      create(
        :published_tagged_article,
        location: build(:location),
        syndications: build_list(:syndication, 3)
      )
    end

    before do
      get "/articles/#{article.slug}", headers: { 'Accept': 'application/json' }
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the show template' do
      assert_template 'show'
    end

    it 'displays a JSON representation of the article' do
      props = JSON.parse(response.body)['items'][0]['properties']
      location_props = props['location'][0]['properties']

      expect(props['name'][0]).to eq(article.title.smarten)
      expect(props['content'][0]['value']).to eq(article.content.to_s)
      expect(props['category'].length).to eq(3)

      expect(location_props['latitude'][0]).to eq(article.location.latitude)
      expect(location_props['longitude'][0]).to eq(article.location.longitude)

      expect(props['syndication'].length).to eq(3)
    end
  end
end
