@stables.each do |stable|
    json.set! stable.id do
        json.extract! stable, :id, :name, :price, :state
        json.bookingsToday stable.reservations_today.size
        json.pictureUrl url_for(stable.picture)
        
        reviewCount = stable.reviews.size
        json.reviewCount reviewCount
        if reviewCount == 0
            json.overallRating 0
        else
            json.overallRating stable.reviews.average(:overall).to_f.round(1)
        end
    end
end