class Dataset < ActiveRecord::Base
  validates :data, :user_id, :title, presence:true

  belongs_to :user
end
