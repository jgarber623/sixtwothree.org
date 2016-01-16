# Disable X-Runtime and X-Request-Id headers
Rails.application.config.tap do |config|
  config.middleware.delete(Rack::Runtime)
  config.middleware.delete(ActionDispatch::RequestId)
end
