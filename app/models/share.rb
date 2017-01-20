class Share < ActiveRecord::Base
  validates :user_id, :chart_id, presence: true

  belongs_to :user
  belongs_to :chart
end
