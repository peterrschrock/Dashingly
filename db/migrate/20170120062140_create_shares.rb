class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.integer :user_id, null:false
      t.integer :chart_id, null:false
    end
    add_index :shares, :user_id
    add_index :shares, :chart_id
  end
end
