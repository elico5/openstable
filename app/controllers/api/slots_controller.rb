require 'time'

class Api::SlotsController < ApplicationController
    INTERVAL = 60*15;

    def show
        stable = Stable.find(params[:stable_id])
        @stable_id = stable.id
        @date = query_params[:date]
        times = check_times(get_times(query_params[:time]), stable.open_time, stable.close_time)
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
            overlapping_quantity = ActiveRecord::Base.connection.select_rows(sql)[0][0] || 0
            @valid_times << time if overlapping_quantity + @party_size <= stable.capacity
        end
        render :show
    end

    def index
        @date = query_params[:date]
        @party_size = query_params[:party_size].to_i
        region_id = params[:region_id]
        times = get_times(query_params[:time])
        @stablesTimes = Hash.new { |h, k| h[k] = [] }
        times.each do |time|
            sql = <<-SQL
                SELECT
                stables.id
                FROM
                stables
                JOIN
                (
                    SELECT
                    almost.id as id, sum(almost.party_size) as total_reservation_size
                    FROM
                    (
                        SELECT
                        stables.id as id, coalesce(overlapped_reservations.party_size, 0) as party_size
                        FROM
                        stables
                        LEFT JOIN
                        (
                            SELECT
                            stables.id as id, reservations.party_size as party_size
                            FROM
                            stables
                            JOIN
                            reservations on reservations.stable_id = stables.id
                            WHERE
                            (reservations.date = '#{@date}')
                            AND
                            (reservations.cancelled = False)
                            AND
                            (
                                NOT
                                (
                                    (reservations.time > '#{time}' + stables.duration * interval '1 hour')
                                    OR
                                    (reservations.time + stables.duration * interval '1 hour' < '#{time}')
                                )
                            )
                        ) as overlapped_reservations on overlapped_reservations.id = stables.id
                        WHERE
                        (stables.region = #{region_id})
                        AND
                        ('#{time}' <= stables.close_time)
                        AND
                        ('#{time}' >= stables.open_time)
                    ) as almost
                    GROUP BY
                    almost.id
                ) as finally on finally.id = stables.id
                WHERE
                finally.total_reservation_size + #{@party_size} <= stables.capacity
            SQL
            stableIds = ActiveRecord::Base.connection.select_rows(sql)
            stableIds.each do |id|
                @stablesTimes[id[0]] << time
            end
        end
        @stables = Stable.includes(:reviews, :reservations_today).with_attached_picture.find(@stablesTimes.keys)
        render :index
    end

    private

    def query_params
        params.require(:query).permit(:date, :time, :party_size)
    end

    def check_times(stringTimes, open_time, close_time)
        times = [];
        stringTimes.each do |stringTime|
            times << stringTime if stringTime >= open_time.strftime('%H:%M') && stringTime <= close_time.strftime('%H:%M')
        end
        times
    end

    def get_times(stringTime)
        times = [stringTime]
        time = Time.parse(stringTime)
        [15, 30, 45, 60].each do |interval|
            times << (time + interval * 60).strftime('%H:%M')
            times << (time - interval * 60).strftime('%H:%M')
        end
        times
    end

end