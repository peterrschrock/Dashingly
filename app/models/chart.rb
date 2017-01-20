class Chart < ActiveRecord::Base
  validates :title, :x_name, :y_name, :dataset_id, :x_data, :y_data, :user_id, :chartType, presence:true
  validates :title, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :dataset
  has_many :shares
  has_many :sharedToUsers, through: :shares, source: :user
end
