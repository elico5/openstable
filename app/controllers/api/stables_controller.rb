class Api::StablesController < ApplicationController

    def show
        @stable = Stable.includes(
            :groom,
            { reviews: [{reservation: [{ user: [:reviews] }] }] }).with_attached_picture.find(params[:id])
        @current_user_id = stable_params[:currentUserId].to_i
        render :show
    end

    def index
        @stables = Stable.includes(:reviews, :reservations_today, :reservations, { picture_attachment: [:blob] })
            .left_joins(:reservations)
            .where(region: params[:region][:regionId].to_i)
            .group(:id)
            .order('COUNT(reservations.id) DESC')
            .limit(10)
        render :index
    end

    def regions
        region_breakdowns = Stable.connection.select_rows('SELECT region, count(id) FROM stables GROUP BY region')
        @region_breakdown_hash = Hash.new
        region_breakdowns.each do |tuple|
            @region_breakdown_hash[tuple[0]] = tuple[1]
        end
        render :regions
    end

    private

    def stable_params
        params.require(:user).permit(:currentUserId)
    end

end