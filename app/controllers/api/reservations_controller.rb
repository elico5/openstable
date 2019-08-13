class Api::ReservationsController < ApplicationController

    def create
        stable_id = params[:stable_id]
        user_id = reservation_params[:userId]
        date = reservation_params[:date]
        time = reservation_params[:time]
        party_size = reservation_params[:partySize]
        @reservation = Reservation.new(
            stable_id: stable_id,
            user_id: user_id,
            date: date,
            time: time,
            party_size: party_size)
        if @reservation.overlapping_self_requests
            render json: ["Whoops, looks like you already have an overlapping reservation at this stable."], status: 403
            return
        else
            @reservation.reserve_if_space
        end
        if @reservation.new_record?
            render json: ["Sorry partner, looks like another rider got there first!"], status: 403
        else
            render :show
        end
    end

    def update
        @reservation = Reservation.find(params[:id])
        @reservation.update!(cancelled: true)
        render :show
    end

    private

    def reservation_params
        params.require(:resParams).permit(:userId, :date, :time, :partySize)
    end

end