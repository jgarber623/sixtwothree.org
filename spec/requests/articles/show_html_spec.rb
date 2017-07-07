RSpec.describe ArticlesController, type: :request do
  describe 'GET #show' do
    let! :article do
      create(
        :published_tagged_article,
        location: build(:location),
        syndications: build_list(:syndication, 3)
      )
    end

    before do
      get "/articles/#{article.slug}"
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the show template' do
      assert_template 'show'
    end

    it 'displays the article' do
      assert_select '.h-entry' do
        assert_select '.p-name', text: article.title.smarten
        assert_select '.e-content', html: article.content.to_html.chomp
        assert_select '.p-category', count: 3

        assert_select '.h-geo' do
          assert_select '.p-latitude', text: article.location.latitude.to_s
          assert_select '.p-longitude', text: article.location.longitude.to_s
        end

        assert_select '.u-syndication', count: 3
      end
    end
  end
end
