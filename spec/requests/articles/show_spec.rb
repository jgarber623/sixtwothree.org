RSpec.describe ArticlesController, type: :request do
  describe 'GET #show' do
    before do
      Article.create!(title: 'Test Article Title', content: 'This is a test article’s content.', published_at: Time.now.utc)

      get '/posts/test-article-title'
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the show template' do
      assert_template 'show'
    end

    it 'displays the article' do
      assert_select '.h-entry .p-name', text: 'Test Article Title'
      assert_select '.h-entry .e-content', text: 'This is a test article’s content.'
    end
  end
end
