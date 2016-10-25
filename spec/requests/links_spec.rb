require 'rails_helper'

RSpec.describe 'links', type: :request do
  describe 'POST #fetch' do
    let :headers do
      {
        'ACCEPT': 'application/json'
      }
    end

    it 'renders an unsuccessful JSON response.' do
      post '/links/fetch', {}, headers

      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq('application/json')
      expect(JSON.parse(response.body)['success']).to eq(false)
    end

    it 'it renders a successful JSON response.' do
      post '/links/fetch', { link: { url: 'http://example.com/' } }, headers

      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq('application/json')
      expect(JSON.parse(response.body)['success']).to eq(true)
    end
  end
end
