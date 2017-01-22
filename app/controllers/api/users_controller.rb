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

  def index
    # debugger
    @users = User.where.not(id: params[:userId])
    render "api/users/index"
  end


end
