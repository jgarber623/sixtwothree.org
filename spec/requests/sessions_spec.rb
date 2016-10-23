require 'rails_helper'

RSpec.describe 'sessions', type: :request do
  describe 'GET #new' do
    it 'renders the login page.' do
      get '/login'

      expect(response).to be_success
      expect(response).to have_http_status(:success)
      expect(response).to render_template('sessions/new')
    end

    it 'redirects to the homepage.' do
      allow_any_instance_of(ApplicationController).to receive(:logged_in?).and_return(true)

      get '/login'

      expect(response).to have_http_status(:redirect)
      expect(response).to redirect_to('/')
    end
  end
end
