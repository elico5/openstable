class Api::StablesController < ApplicationController

    def show
        @stable = Stable.includes(
            :groom,
            { reviews: [{reservation: [{ user: [:reviews] }] }] }).with_attached_picture.find(params[:id])
        render :show
    end

    def index
        if params[:region_id]

        elsif params[:search]

        else
            @stables = Stable.includes(:reviews, :reservations_today).all
        end
        render :index
    end

end