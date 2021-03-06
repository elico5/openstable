class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :phone_number, length: { minimum: 10, maximum: 15 }, allow_blank: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :riding_location, presence: true, inclusion: { in: 0..5 }

    attr_reader :password

    has_one :stable, foreign_key: :groom_id
    has_many :reservations
    has_many :reviews, through: :reservations, source: :review
    has_many :favorites

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        save!
        session_token
    end

    private

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
    
end
