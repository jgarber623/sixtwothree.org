class SessionsController < ApplicationController
  AUTHORIZATION_ENDPOINT = 'https://indieauth.com/auth'.freeze

  def create
    if url == Rails.application.config.francis_cms.site_url
      session[:user_id] = url
    end
  rescue Mechanize::ResponseCodeError
  ensure
    redirect_to (session[:redirect_to] || root_path), notice: t('flashes.sessions.create_notice')
  end

  def destroy
    reset_session

    redirect_to root_path, notice: t('flashes.sessions.destroy_notice')
  end

  def new
    redirect_to root_path, notice: t('flashes.sessions.new_notice') if logged_in?
  end

  private

  def auth_params
    {
      client_id: root_url,
      code: params[:code],
      redirect_uri: auth_url
    }
  end

  def source_page
    @source_page ||= Mechanize.new.post(AUTHORIZATION_ENDPOINT, auth_params)
  end

  def url
    @url ||= CGI.parse(source_page.content)['me'].first
  end
end
