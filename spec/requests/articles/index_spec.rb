RSpec.describe ArticlesController, type: :request do
  describe 'GET #index' do
    it 'returns HTTP success status code' do
      get '/posts'

      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      get '/posts'

      assert_template 'index'
    end

    context 'when articles exist' do
      let!(:articles) { create_list(:published_article, 2) }

      it 'displays a reverse chronological list of articles' do
        get '/posts'

        assert_select '.h-feed' do
          assert_select 'li:nth-child(1) .p-name', text: articles.last.title
          assert_select 'li:nth-child(2) .p-name', text: articles.first.title
        end
      end
    end

    context 'when no articles exist' do
      it 'displays a message' do
        get '/posts'

        assert_select 'p', text: 'No posts found!'
      end
    end
  end
end
