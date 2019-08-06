class Reservation < ApplicationRecord
    validates :stable_id, :user_id, :date, :time, :party_size, presence: true
    validates :cancelled, allow_nil: true, inclusion: { in: [true, false] }

    belongs_to :user
    belongs_to :stable
    has_one :review
end
