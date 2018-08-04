Rails.application.config.tap do |config|
  config.authorization_endpoint = 'https://indieauth.com/auth'
  config.token_endpoint         = 'https://tokens.indieauth.com/token'
end
