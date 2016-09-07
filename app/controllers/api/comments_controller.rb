class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  def show
    @comment = Comment.find(params[:id])
  end

  def edit

  end

  def update

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end
end
