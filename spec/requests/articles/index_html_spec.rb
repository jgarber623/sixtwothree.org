RSpec.describe ArticlesController, type: :request do
  describe 'GET #index' do
    it 'returns HTTP success status code' do
      get '/articles'

      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      get '/articles'

      assert_template 'index'
    end

    context 'when articles exist' do
      let!(:articles) { create_list(:published_article, 2) }

      it 'displays a reverse chronological list of articles' do
        get '/articles'

        assert_select '.h-feed' do
          assert_select 'li:nth-child(1) .p-name', text: articles.last.name.smarten
          assert_select 'li:nth-child(2) .p-name', text: articles.first.name.smarten
        end
      end
    end

    context 'when no articles exist' do
      it 'displays a message' do
        get '/articles'

        assert_select 'p', text: 'No articles found!'
      end
    end
  end
end
