class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_username(user_params[:username])
    if @user && @user.has_password?(user_params[:password])
      login(@user)
      # TODO Double check this api route and the one in the UsersController and the one in destroy
      render "api/users/show"
    else
      render(json: "Username and Password do not match", status: 401)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(json: "No one signed in!", status: 404)
    end
  end

end
