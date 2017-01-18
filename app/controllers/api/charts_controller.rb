require 'json'

class Api::ChartsController < ApplicationController
  def create
    @chart = Chart.new(chart_params)
    if @chart.save!
      render "api/charts/show"
    else
      render json: "Invalid Chart", status: 422
    end
  end

  def update
    @chart = Chart.find(params["id"])
    if @chart
      @chart.update(chart_params)
      render "api/charts/show"
    else
      render(json: "No chart to update!", status: 422)
    end
  end

  def show
    @chart = Chart.find(params[:id])
    if @chart
      render "api/charts/show"
    else
      render json: "Chart doesn't exist"
    end
  end

  def index
    @charts = current_user.charts
    render "api/charts/index"
  end

  def destroy
    @chart = Chart.find(params["id"])
    if @chart
      @chart.destroy
      render json: @chart
      # render json: ""
    else
      render(json: "No chart to delete!", status: 404)
    end
  end


  private

  def chart_params
    params.require(:chart).permit(:title, :x_name, :y_name, :dataset_id, :x_data, :y_data, :user_id, :chartType)
  end
end
