class SessionsController < ApplicationController
  def create
    session[:user_id] = url if url == Rails.application.config.francis_cms.site_url
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
    @source_page ||= Mechanize.new.post(Rails.application.config.authorization_endpoint, auth_params)
  end

  def url
    @url ||= CGI.parse(source_page.content)['me'].first
  end
end
