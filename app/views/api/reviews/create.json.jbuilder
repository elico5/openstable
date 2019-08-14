json.set! @review.id do
    json.extract! @review, :id, :overall, :service, :cleanliness, :body, :reservation_id
end