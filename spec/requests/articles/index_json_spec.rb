RSpec.describe ArticlesController, type: :request do
  describe 'GET #index' do
    it 'returns HTTP success status code' do
      get '/posts', headers: { 'Accept': 'application/json' }

      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      get '/posts', headers: { 'Accept': 'application/json' }

      assert_template 'index'
    end

    context 'when articles exist' do
      let!(:articles) { create_list(:published_article, 2) }

      it 'displays a JSON representation of a reverse chronological list of articles' do
        get '/posts', headers: { 'Accept': 'application/json' }

        items = JSON.parse(response.body)['items']

        expect(items[0]['properties']['name'][0]).to eq(articles.last.title.smarten)
        expect(items[1]['properties']['name'][0]).to eq(articles.first.title.smarten)
      end
    end

    context 'when no articles exist' do
      it 'displays an empty JSON representation' do
        get '/posts', headers: { 'Accept': 'application/json' }

        expect(JSON.parse(response.body)['items'].length).to eq(0)
      end
    end
  end
end
