require 'http'

class SessionsController < ApplicationController
  AUTHORIZATION_ENDPOINT = 'https://indielogin.com/auth'.freeze

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
    # @source_page ||= Mechanize.new.post(AUTHORIZATION_ENDPOINT, auth_params)
    @source_page ||= HTTP.headers(accept: 'application/json').post(AUTHORIZATION_ENDPOINT, form: auth_params)
  end

  def url
    @url ||= JSON.parse(source_page.body.to_s)['me']
  end
end
