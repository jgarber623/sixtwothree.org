RSpec.describe PagesController, type: :request do
  describe 'GET #homepage' do
    before do
      get '/'
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the homepage template' do
      assert_template 'homepage'
    end

    it 'displays the page heading' do
      assert_select 'h1', text: 'Homepage'
    end
  end
end
