class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  private

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logout
    session[:session_token] = nil
    @current_user.reset_session_token!
    @current_user = nil
  end

  def logged_in?
    return true if current_user
    return false
  end


  # TODO do I need this?
  # def require_logged_in
  #   render json: unless logged_in?


  private
  def user_params
    # TODO where does requiring user come into play?
    params.require(:user).permit(:username, :password)
  end
end
