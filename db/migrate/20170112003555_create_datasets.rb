class CreateDatasets < ActiveRecord::Migration
  def change
    create_table :datasets do |t|
      t.integer :user_id, null:false
      t.string :title, null: false
      t.jsonb :dataset, null:false
      t.timestamps null: false
    end
    add_index :datasets, :user_id
  end
end
