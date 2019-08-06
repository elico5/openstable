if @valid_times.length == 0
    json.set!(@stable_id, ({}))
else
    json.set! @stable_id do
        @valid_times.each do |time|
            json.set! time do
                json.stableId @stable_id
                json.date @date
                json.time time
                json.partySize @party_size
            end
        end
    end
end