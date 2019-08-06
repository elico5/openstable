require 'time'

class Api::SlotsController < ApplicationController
    INTERVAL = 60*15;

    def show
        stable = Stable.find(params[:stable_id])
        @stable_id = stable.id
        @date = query_params[:date]
        times = check_times(query_params[:time], stable.open_time, stable.close_time)
        @party_size = query_params[:party_size].to_i
        @valid_times = [];
        times.each do |time|
            sql = <<-SQL
                SELECT
                sum(coalesce(reservations.party_size, 0))
                FROM
                stables
                LEFT JOIN
                reservations on reservations.stable_id = stables.id
                WHERE
                (stables.id = #{@stable_id})
                AND
                (reservations.date = '#{@date}')
                AND
                (reservations.cancelled = False)
                AND
                (
                    NOT (
                        (reservations.time > '#{time}' + stables.duration * interval '1 hour')
                        OR
                        (reservations.time + stables.duration * interval '1 hour' < '#{time}')
                        )
                )
            SQL
            overlapping_quantity = Reservation.connection.select_rows(sql)[0][0] || 0
            @valid_times << time if overlapping_quantity + @party_size <= stable.capacity
        end
        render :show
    end

    private

    def query_params
        params.require(:query).permit(:date, :time, :party_size)
    end

    def check_times(stringTime, open_time, close_time)
        times = [stringTime]
        time = Time.parse(stringTime)
        [15, 30, 45, 60].each do |interval|
            time1 = (time + interval * 60).strftime('%H:%M')
            time2 = (time - interval * 60).strftime('%H:%M')
            times << time1 if time1 >= open_time.strftime('%H:%M') && time1 <= close_time.strftime('%H:%M')
            times << time2 if time2 >= open_time.strftime('%H:%M') && time2 <= close_time.strftime('%H:%M')
        end
        times
    end

end