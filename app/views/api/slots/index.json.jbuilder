if @stablesTimes.empty?
    json.stables({})
    json.slots({})
else
    json.stables do 
        @stables.each do |stable|
            json.set! stable.id do
                json.id stable.id
                json.pictureUrl url_for(stable.picture)
                json.name stable.name
                json.price stable.price
                json.address stable.street_address
                json.city stable.city
                json.state stable.state
                
                reviewCount = stable.reviews.size
                overallRating = reviewCount == 0 ? 0 : stable.reviews.average(:overall).to_f.round(1)
                
                json.reviewCount reviewCount
                json.reservationsToday stable.reservations_today.size
                json.overallRating overallRating
            end
        end
    end

    json.slots do
        @stablesTimes.keys.each do |stableId|
            json.set! stableId do
                @stablesTimes[stableId].each do |time|
                    json.set! time do
                        json.stableId stableId
                        json.date @date
                        json.time time
                        json.partySize @party_size
                    end
                end
            end
        end
    end
end