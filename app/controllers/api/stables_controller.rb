class Api::StablesController < ApplicationController

    def show
        @stable = Stable.includes(
            :groom,
            { reviews: [{reservation: [{ user: [:reviews] }] }] }).with_attached_picture.find(params[:id])
        @current_user_id = stable_params[:currentUserId].to_i
        render :show
    end

    def index
        if params[:region_id]

        elsif params[:search]

        else
            @stables = Stable.includes(:reviews, :reservations_today).limit(10)
        end
        render :index
    end

    private

    def stable_params
        params.require(:user).permit(:currentUserId)
    end

end