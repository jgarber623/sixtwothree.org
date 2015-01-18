class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def logged_in?
    session[:user_id] && session[:user_id] == Rails.application.config.francis_cms.site_url
  end
  helper_method :logged_in?
end
