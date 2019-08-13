json.users do
    json.set! @user.id do
        json.extract! @user, :id, :email, :first_name, :last_name, :phone_number, :riding_location, :created_at
        json.reviewCount @user.reviews.size
    end
end

json.reservations do
    @user.reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :stable_id, :date, :time, :party_size, :cancelled
            json.reviewed reservation.review ? true : false
        end
    end
end

favorite_stables = @user.favorites.map { |favorite| favorite.stable }
reservation_stables = @user.reservations.map { |reservation| reservation.stable }
total_stables = (favorite_stables + reservation_stables).uniq

json.stables do
    total_stables.each do |stable|
        json.set! stable.id do
            json.extract! stable, :id, :name, :city, :state, :region, :duration
            json.pictureUrl url_for(stable.picture)
            
            reviewCount = stable.reviews.size
            if reviewCount == 0
                json.overallRating 0
            else
                json.overallRating stable.reviews.average(:overall).to_f.round(1)
            end
        end
    end
end

json.reviews do
    @user.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :overall, :service, :cleanliness, :value, :body, :reservation_id
        end
    end
end

json.favorites @user.favorites.map { |favorite| favorite.stable_id }