RSpec.describe TagsController, type: :request do
  describe 'GET #index' do
    it 'returns HTTP success status code' do
      get '/tags'

      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      get '/tags'

      assert_template 'index'
    end

    context 'when tags exist' do
      it 'displays a list of tags' do
        Article.create!(
          title: 'Test Article Title',
          content: 'This is a test article’s content.',
          tag_list: 'foo, bar, biz, baz',
          published_at: Time.now.utc
        )

        get '/tags'

        assert_select 'ul li', count: 4
      end
    end

    context 'when no tags exist' do
      it 'displays a message' do
        get '/tags'

        assert_select 'p', text: 'No tags found!'
      end
    end
  end
end
