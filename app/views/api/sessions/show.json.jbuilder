json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :phone_number, :riding_location, :created_at
    json.reviewCount @user.reviews.size
end

json.favorites @user.favorites.map { |favorite| favorite.stable_id } 