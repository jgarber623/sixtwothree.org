RSpec.describe TagsController, type: :request do
  describe '#GET show' do
    it 'returns HTTP success status code' do
      get '/tags/foo'

      expect(response).to have_http_status(:success)
    end

    it 'renders the show template' do
      get '/tags/foo'

      assert_template 'show'
    end

    context 'when results exist' do
      it 'displays a reverse chronological list of results' do
        Article.create!(
          title: 'Test Article Title 1',
          content: 'This is a test article’s content.',
          tag_list: 'foo, bar, biz, baz',
          published_at: Time.now.utc
        )

        Article.create!(
          title: 'Test Article Title 2',
          content: 'This is a test article’s content.',
          tag_list: 'foo, bar, biz, baz',
          published_at: Time.now.utc
        )

        Article.create!(
          title: 'Test Article Title 3',
          content: 'This is a test article’s content.',
          tag_list: 'foo, bar, biz, baz'
        )

        get '/tags/foo'

        assert_select '.h-feed' do
          assert_select 'li:nth-child(1) .p-name', text: 'Test Article Title 2'
          assert_select 'li:nth-child(2) .p-name', text: 'Test Article Title 1'
        end
      end
    end

    context 'when no results exist' do
      it 'displays a message' do
        get '/tags/foo'

        assert_select 'p', text: 'No content tagged “foo” found!'
      end
    end
  end
end
