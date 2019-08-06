require 'open-uri'
require 'date'

class Stable < ApplicationRecord
    validates :name, :phone_number, :city, :state, :lat, :lng, :capacity,
              :open_time, :close_time, :duration, :price, presence: true
    validates :street_address, presence: true, uniqueness: true
    validates :zip, presence: true, length: { maximum: 10 }
    validates :region, presence: true, inclusion: { in: 0..5 }
    validates_numericality_of :lat, less_than_or_equal_to: 90, greater_than_or_equal_to: -90
    validates_numericality_of :lng, less_than_or_equal_to: 180, greater_than_or_equal_to: -180
    validates :description, presence: true, length: { maximum: 5000 }
    validates_numericality_of :capacity, greater_than_or_equal_to: 1
    validates_numericality_of :duration, greater_than_or_equal_to: 1  
    validates_numericality_of :price, greater_than: 0

    validate :close_after_open

    belongs_to :groom, class_name: :User
    has_one_attached :picture
    has_many :reservations
    has_many :reservations_today, -> { where date: Date.today }, class_name: :Reservation
    has_many :reviews, through: :reservations, source: :review
    has_many :reviewees, through: :reviews, source: :user
    has_many :favorites

    after_initialize :get_lat_lng, :get_region

    private

    def close_after_open
        errors.add(:close_time, "must be after open time") if open_time >= close_time
    end

    def get_lat_lng
        base_url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
        query_string = [street_address.split(" ").join("+"), city.split(" ").join("+"), state].join(",+")
        access = "&key=#{Rails.application.credentials.gmaps[:api_key]}"
        url = base_url + query_string + access
        response = JSON.parse(open(url).read)
        self.lat = response["results"][0]["geometry"]["location"]["lat"]
        self.lng = response["results"][0]["geometry"]["location"]["lng"]
    end

    def get_region
        states_NE = ["ME", "DE", "NH", "VT", "MA", "RI", "MD", "CT", "NY", "NJ", "PA", "DC"]
        states_SE = ["FL", "GA", "SC", "NC", "VA", "WV", "KY", "TN", "AL", "MS", "LA", "AR"]
        states_MW = ["ND", "SD", "NE", "KS", "MN", "IA", "MO", "WI", "MI", "OH", "IL", "IN"]
        states_SW = ["TX", "OK", "NM", "AZ"]
        states_W = ["CO", "WY", "MT", "ID", "WA", "OR", "NV", "UT", "CA"]
        regions = [states_NE, states_SE, states_MW, states_SW, states_W]
        region_id = 0
        regions.each_with_index do |states, i|
            if states.include?(state)
                region_id = i + 1
                break
            end
        end
        self.region = region_id
    end

end
