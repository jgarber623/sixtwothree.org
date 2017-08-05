RSpec.describe TagsController, type: :request do
  describe '#GET show' do
    context 'when results exist' do
      let!(:articles) { create_list(:published_tagged_article, 2) }

      before do
        get '/tags/white-house'
      end

      it 'returns HTTP success status code' do
        expect(response).to have_http_status(:success)
      end

      it 'renders the show template' do
        assert_template 'show'
      end

      it 'displays a reverse chronological list of results' do
        assert_select '.h-feed' do
          assert_select 'li:nth-child(1) .p-name', text: articles.last.title.smarten
          assert_select 'li:nth-child(2) .p-name', text: articles.first.title.smarten
        end
      end
    end

    context 'when no results exist' do
      pending 'displays a message' do
        get '/tags/capitol-building'

        assert_select 'p', text: 'No content tagged “capitol building” found!'
      end
    end
  end
end
