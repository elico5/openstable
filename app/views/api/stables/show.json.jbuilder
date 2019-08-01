json.extract! @stable, :id, :name, :phone_number, :region, :lat, :lng, :description, :open_time, :close_time, :duration, :price
json.pictureUrl url_for(@stable.picture)
json.groomName @stable.groom.first_name + " " + @stable.groom.last_name
json.address @stable.street_address + " " + @stable.city + ", " + @stable.state + " " + @stable.zip