json.extract! @user, :id, :first_name, :last_name
json.reviewCount @user.reviews.size