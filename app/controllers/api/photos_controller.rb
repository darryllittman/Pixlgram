class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    @comments = @photo.comments

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all
    @photos = Photo.all
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/index"
  end

  private
  def photo_params
    params.require(:photo).permit(:location, :caption, :url)
  end
end
