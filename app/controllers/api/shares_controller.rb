class Api::SharesController < ApplicationController
  def index
    debugger
    if(params[:userId].to_i >= 0)
      @charts = User.find(params[:userId]).sharedCharts
      render "api/charts/index"
    elsif(params[:chartId].to_i >= 0)
      @users = Chart.find(params[:chartId]).sharedToUsers
      # TODO why don't these join properly???
      render "api/users/index"
    else
      @shares = Share.all
      render @shares
    end
  end

  def create
    @share = Share.new(share_params)
    if @share.save!
      render "api/shares/show"
    else
      render json: "Invalid Share", status: 422
    end
  end

  def destroy
    @share = Share.find(params["id"])
    if @share
      @share.destroy
      render json: "api/shares/show"
    else
      render(json: "No share to delete!", status: 404)
    end
  end


  private
  def share_params
    params.require(:share).permit(:user_id, :chart_id)
  end
end
