class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save
            render :create
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    private

    def review_params
        params.require(:reviewParams).permit(:overall, :service, :cleanliness, :value, :body, :reservation_id);
    end
end