class Chart < ActiveRecord::Base
  validates :title, :x_name, :y_name, :dataset_id, :x_data, :y_data, :user_id, :chartType, presence:true

  belongs_to :user
  belongs_to :dataset
  has_many :shares, dependent: :destroy
  has_many :sharedToUsers, through: :shares, source: :user
end
