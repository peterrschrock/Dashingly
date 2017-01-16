require 'json'


class Api::DatasetsController < ApplicationController
  def create

    @dataset = Dataset.new(dataset_params)
    if @dataset.save!
      render "api/datasets/show"
    else
      render json: "Invalid Dataset", status: 422
    end
  end

  def destroy
    debugger
    @dataset = Dataset.find(params["id"])
    if @dataset
      @dataset.destroy
      render json: @dataset
      # render json: ""
    else
      render(json: "No dataset to delete!", status: 404)
    end
  end

  def index
    # debugger
    @datasets = current_user.datasets
    render "api/datasets/index"
  end

  def show
    @dataset = Dataset.find(id: dataset_params[:id])
    # TODO do I need to prevent access to users who don't own the data in any way?
    if @dataset
      render "api/datasets/show"
    else
      render json: "Dataset doesn't exist"
    end
  end

  private

  def dataset_params
    params.require(:datasets).permit(:user_id, :title).tap do |whitelisted|
      whitelisted[:data] = params[:datasets][:data ]
    end
  end
end
