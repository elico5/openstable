class Review < ApplicationRecord
    validates :reservation_id, presence: true
    validates :overall, :service, :cleanliness, :value, inclusion: { in: [1, 2, 3, 4, 5]}
    validates :body, length: { minimum: 50, maximum: 2000 }, presence: true

    belongs_to :reservation
    has_one :stable, through: :reservation
    has_one :user, through: :reservation
end
