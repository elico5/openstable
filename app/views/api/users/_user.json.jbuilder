json.extract! user, :id, :email, :first_name, :last_name, :phone_number, :riding_location, :created_at
json.reviewCount user.reviews.size
json.favoritedStableIds user.favorites.map { |favorite| favorite.stable_id }

reviewableStables = Hash.new { |h, k| h[k] = [] }
user.reservations.each do |reservation|
    if !reservation.review
        reviewableStables[reservation.stable_id] << reservation.id
    end
end

json.reviewableStables reviewableStables