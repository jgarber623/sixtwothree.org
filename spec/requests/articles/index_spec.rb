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
      it 'displays a reverse chronological list of articles' do
        Article.create!(title: 'Test Article Title 1', content: 'This is a test article’s content.')
        Article.create!(title: 'Test Article Title 2', content: 'This is a test article’s content.')

        get '/posts'

        assert_select 'ol li:nth-child(1) a', text: 'Test Article Title 2'
        assert_select 'ol li:nth-child(2) a', text: 'Test Article Title 1'
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
