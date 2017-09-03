RSpec.describe ArticlesController, type: :request do
  describe 'GET #index' do
    let!(:articles) { create_list(:published_article, 2) }

    before do
      get '/articles', headers: { 'Accept': 'application/rss+xml' }
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      assert_template 'index'
    end

    it 'displays an XML feed of a reverse chronological list of articles' do
      assert_select 'channel' do
        assert_select 'item:nth-of-type(1) title', articles.last.name.smarten
        assert_select 'item:nth-of-type(2) title', articles.first.name.smarten
      end
    end
  end
end
