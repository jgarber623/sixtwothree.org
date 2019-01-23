Rails.application.config.tap do |config|
  config.authorization_endpoint = 'https://indieauth.com/auth'
  config.microsub_endpoint      = 'https://aperture.p3k.io/microsub/219'
  config.token_endpoint         = 'https://tokens.indieauth.com/token'
end
