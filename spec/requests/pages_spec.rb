RSpec.describe 'pages', type: :request do
  describe 'GET #homepage' do
    it 'renders the homepage' do
      get '/'

      expect(response).to have_http_status(:success)
      expect(response).to render_template('pages/homepage')
    end
  end

  describe 'GET #sitemap' do
    it 'renders the sitemap' do
      get '/sitemap.xml'

      expect(response).to have_http_status(:success)
      expect(response).to render_template('pages/sitemap')
    end
  end
end
