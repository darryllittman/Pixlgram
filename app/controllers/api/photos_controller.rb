class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render "api/photos/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
 
    render "api/photos/index"
  end

  private
  def photo_params
    params.require(:photo).permit(:user_id, :location, :caption)
  end
end
