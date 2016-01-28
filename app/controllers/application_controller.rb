class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :capture_redirect_to
  before_action :set_headers

  def logged_in?
    session[:user_id] && session[:user_id] == Rails.application.config.francis_cms.site_url
  end
  helper_method :logged_in?

  def capture_redirect_to
    return unless request.get?

    if !['/auth', '/login', '/logout'].include?(request.path) && !request.xhr?
      session[:redirect_to] = request.fullpath
    end
  end

  private

  def set_headers
    response.headers['Link'] = %{<#{francis_cms.webmentions_url}>; rel="webmention"}
  end
end
