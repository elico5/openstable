class Api::FavoritesController < ApplicationController

    def create
        stable_id = params[:stable_id]
        user_id = favorite_params[:userId]
        @favorite = Favorite.new(stable_id: stable_id, user_id: user_id)
        if @favorite.save
            render :show
        end
    end

    def destroy
        stable_id = params[:stable_id]
        user_id = favorite_params[:userId]
        @favorite = Favorite.find_by(stable_id: stable_id, user_id: user_id)
        @favorite.destroy
        render :show
    end

    private

    def favorite_params
        params.require(:favoriteParams).permit(:userId)
    end

end