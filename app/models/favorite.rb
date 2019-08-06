class Favorite < ApplicationRecord
    validates :stable_id, :user_id, presence: true

    belongs_to :stable
    belongs_to :user
end
