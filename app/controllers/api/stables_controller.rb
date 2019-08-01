class Api::StablesController < ApplicationController

    def show
        @stable = Stable.includes(:groom).with_attached_picture.find(params[:id])
        render :show
    end

end