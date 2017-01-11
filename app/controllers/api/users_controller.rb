class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render "api/users/show"
    else
      render json: "Invalid Credentials", status: 422
    end
  end



end
