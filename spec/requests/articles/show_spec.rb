RSpec.describe ArticlesController, type: :request do
  describe 'GET #show' do
    before do
      Article.create!(
        title: 'Test Article Title',
        content: 'This is a test article’s content.',
        location: Location.new(latitude: 38.9281453, longitude: -77.0334985),
        tag_list: 'foo, bar, biz, baz',
        published_at: Time.now.utc
      )

      get '/posts/test-article-title'
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the show template' do
      assert_template 'show'
    end

    it 'displays the article' do
      assert_select '.h-entry' do
        assert_select '.p-name', text: 'Test Article Title'
        assert_select '.e-content', text: 'This is a test article’s content.'
      end

      assert_select '.h-geo' do
        assert_select '.p-latitude', text: '38.9281453'
        assert_select '.p-longitude', text: '-77.0334985'
      end

      assert_select '.p-category', count: 4
    end
  end
end
