class Dataset < ActiveRecord::Base
  validates :data, :user_id, :title, presence:true
  validates :title, uniqueness: {scope: :user_id}

  belongs_to :user
  has_many :charts, dependent: :destroy
  has_many :sharedToUsers, through: :charts, source: :sharedToUsers
end
