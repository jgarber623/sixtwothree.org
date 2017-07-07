RSpec.describe TagsController, type: :request do
  describe '#GET show' do
    it 'returns HTTP success status code' do
      get '/tags/white-house'

      expect(response).to have_http_status(:success)
    end

    it 'renders the show template' do
      get '/tags/white-house'

      assert_template 'show'
    end

    context 'when results exist' do
      let!(:articles) { create_list(:published_tagged_article, 2) }

      it 'displays a reverse chronological list of results' do
        get '/tags/white-house'

        assert_select '.h-feed' do
          assert_select 'li:nth-child(1) .p-name', text: articles.last.title.smarten
          assert_select 'li:nth-child(2) .p-name', text: articles.first.title.smarten
        end
      end
    end

    context 'when no results exist' do
      it 'displays a message' do
        get '/tags/capitol-building'

        assert_select 'p', text: 'No content tagged “capitol building” found!'
      end
    end
  end
end
