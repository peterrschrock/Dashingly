class Api::SharesController < ApplicationController
  def index
    if(params[:userId].to_i >= 0)

      @user = User.find(params[:userId])
      @charts = @user.sharedCharts
      @datasets = @user.sharedDatasets
      render "api/shares/charts_index"
    elsif(params[:chartId].to_i >= 0)
      @users = Chart.find(params[:chartId]).sharedToUsers
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
    @share = Share.find_by_user_id_and_chart_id(params["userId"], params["chartId"])
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
