class CreateStaffs < ActiveRecord::Migration[6.0]
  def change
    create_table :staffs do |t|
      t.string :name,               null: false
      t.references :store,          foreign_key: true
      t.integer :rank_id,           null: false
      t.timestamps
    end
  end
end
