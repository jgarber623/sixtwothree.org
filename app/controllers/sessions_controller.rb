class SessionsController < ApplicationController
  def create
    return handle_auth_error unless valid_auth_response?

    session[:user_id] = url

    redirect_to (session[:redirect_to] || root_path), notice: t('flashes.sessions.create_notice')
  rescue Mechanize::ResponseCodeError
    handle_auth_error
  end

  def destroy
    reset_session

    redirect_to root_path, notice: t('flashes.sessions.destroy_notice')
  end

  def new
    redirect_to root_path, notice: t('flashes.sessions.new_notice') if logged_in?
  end

  def start
    return handle_auth_error unless valid_auth_request_params?

    session[:state] = SecureRandom.hex(16)

    redirect_to "#{authorization_endpoint}?#{URI.encode_www_form(auth_request_params)}"
  end

  private

  def auth_code_verification_params
    {
      code: params[:code],
      client_id: root_url,
      redirect_uri: auth_url
    }
  end

  def auth_request_params
    {
      me: params[:me],
      client_id: root_url,
      redirect_uri: auth_url,
      state: session[:state]
    }
  end

  def authorization_endpoint
    @authorization_endpoint ||= Rails.application.config.authorization_endpoint
  end

  def handle_auth_error
    redirect_to root_path, alert: t('flashes.sessions.create_alert')
  end

  def source_page
    @source_page ||= Mechanize.new.post(authorization_endpoint, auth_code_verification_params)
  end

  def url
    @url ||= JSON.parse(source_page.content)['me']
  end

  def valid_auth_request_params?
    params[:me].match?(URI::DEFAULT_PARSER.make_regexp(%w[http https]))
  end

  def valid_auth_response?
    params[:state] == session[:state] && url == Rails.application.config.francis_cms.site_url
  end
end
