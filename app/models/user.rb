class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token


  # TODO Add Validations as needed

  has_many :datasets
  has_many :charts
  has_many :shares
  has_many :sharedCharts, through: :shares, source: :chart
  has_many :sharedDatasets, through: :sharedCharts, source: :dataset


  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if @user && @user.has_password?(password)
      return @user
    end
    nil
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(128)
    # self.ensure_session_token_uniqueness
    self.save!
    return self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end



  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(128)
  end

end
