RSpec.describe PagesController, type: :request do
  describe 'GET #colophon' do
    before do
      get '/colophon'
    end

    it 'returns HTTP success status code' do
      expect(response).to have_http_status(:success)
    end

    it 'renders the colophon template' do
      assert_template('colophon')
    end

    it 'displays the page heading' do
      assert_select 'h1', text: 'Colophon'
    end
  end
end
