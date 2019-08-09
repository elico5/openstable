json.stable do
    json.extract! @stable, :id, :name, :phone_number, :region, :lat, :lng, :description, :open_time, :close_time, :duration, :price, :capacity
    json.pictureUrl url_for(@stable.picture)
    json.groomName @stable.groom.first_name + " " + @stable.groom.last_name
    json.address @stable.street_address + " " + @stable.city + ", " + @stable.state + " " + @stable.zip
    
    reviewCount = @stable.reviews.size
    json.reviewCount reviewCount
    json.reviewIds @stable.reviews.map { |review| review.id }

    if reviewCount == 0
        json.overallRating 0
        json.serviceRating 0
        json.cleanlinessRating 0
        json.valueRating 0
    else
        json.overallRating @stable.reviews.average(:overall).to_f.round(1)
        json.serviceRating @stable.reviews.average(:service).to_f.round(1)
        json.cleanlinessRating @stable.reviews.average(:cleanliness).to_f.round(1)
        json.valueRating @stable.reviews.average(:value).to_f.round(1)
    end
end

if @stable.reviews.empty?
    json.reviews({})
    json.users({})
else
    json.reviews do
        @stable.reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :overall, :service, :cleanliness, :value, :body
                json.reservationDate review.reservation.date
                json.userId review.reservation.user.id
            end
        end
    end

    json.users do
        @stable.reviews.each do |review|
            if review.user.id != @current_user_id
                json.set! review.reservation.user.id do
                    json.id review.reservation.user.id
                    json.first_name review.reservation.user.first_name
                    json.last_name review.reservation.user.last_name
                    json.reviewCount review.reservation.user.reviews.size
                end
            end
        end
    end
end