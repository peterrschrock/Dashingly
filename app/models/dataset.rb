class Dataset < ActiveRecord::Base
  validates: :dataset, :user_id, :title, presence:true

  belongs_to :user
end
