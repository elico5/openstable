class Reservation < ApplicationRecord
    validates :stable_id, :user_id, :date, :time, :party_size, presence: true
    validates :cancelled, allow_nil: true, inclusion: { in: [true, false] }

    belongs_to :user
    belongs_to :stable
    has_one :review

    def overlapping_self_requests
        !self.class.overlapping_reservations(stable_id, date, time).where(user_id: user_id).empty?
    end

    def reserve_if_space
        transaction do
            self.save!
            raise ActiveRecord::Rollback if self.class.overlapping_reservations(stable_id, date, time).sum(:party_size) >= Stable.find(stable_id).capacity
        end
    end

    private

    def self.overlapping_reservations(stable_id, date, time)
        Reservation.joins(:stable).where('stables.id = ?', stable_id).where(
            'reservations.cancelled = false').where(
                'reservations.date = ?', date).where(
                    "NOT ((reservations.time > ?::time + stables.duration * interval '1 hour') OR (reservations.time + stables.duration * interval '1 hour' < ?::time))", time, time)
    end
end
