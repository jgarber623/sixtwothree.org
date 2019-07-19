RSpec.describe 'sessions', type: :request do
  describe 'DELETE #destroy' do
    it 'redirects to the homepage' do
      delete '/logout'

      expect(response).to have_http_status(:redirect)
      expect(response).to redirect_to('/')
      expect(flash[:notice]).to eq('You’ve successfully logged out. See you again soon!')
    end
  end

  describe 'GET #create' do
    context 'when #url matches the configured site URL' do
      let(:sessions_controller_instance) { instance_double(SessionsController) }
      let(:site_url) { 'https://sixtwothree.org/' }

      before do
        allow(SessionsController).to receive(:new).and_return(sessions_controller_instance)
        allow(sessions_controller_instance).to receive(:url).and_return(site_url)
      end

      it 'sets a session variable' do
        get '/auth'

        expect(session[:user_id]).to eq(site_url)
      end
    end

    skip 'redirects to a session-stored path' do
    end

    it 'redirects to the homepage' do
      get '/auth'

      expect(response).to have_http_status(:redirect)
      expect(response).to redirect_to('/')
      expect(flash[:notice]).to eq('Welcome back! You look nice today.')
    end
  end

  describe 'GET #new' do
    context 'when logged in' do
      let(:application_controller_instance) { instance_double(ApplicationController) }

      before do
        allow(ApplicationController).to receive(:new).and_return(application_controller_instance)
        allow(application_controller_instance).to receive(:logged_in?).and_return(true)
      end

      it 'redirects to the homepage' do
        get '/login'

        expect(response).to have_http_status(:redirect)
        expect(response).to redirect_to('/')
        expect(flash[:notice]).to eq('You’re already logged in, boss!')
      end
    end

    it 'renders the login page' do
      get '/login'

      expect(response).to have_http_status(:success)
      expect(response).to render_template('sessions/new')
    end
  end
end
