RSpec.describe TagsController, type: :request do
  describe 'GET #index' do
    before do
      get '/tags'
    end

    it 'returns HTTP success status code' do
      get '/tags'

      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      get '/tags'

      assert_template 'index'
    end

    context 'when tags exist' do
      let!(:article) { create(:published_tagged_article) }

      it 'displays a list of tags' do
        get '/tags'

        assert_select 'ul li', count: article.tags.length
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
