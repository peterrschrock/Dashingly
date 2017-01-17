class CreateCharts < ActiveRecord::Migration
  def change
    create_table :charts do |t|
      t.string :title, null:false
      t.string :x_name, null:false
      t.string :y_name, null:false
      t.integer :dataset_id, null:false
      t.string :x_data, null:false
      t.string :y_data, null:false
      t.integer :user_id, null:false
      t.string :chartType, null: false

      t.timestamps null: false
    end
    add_index :charts, :user_id
  end
end
