class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name,         null: false
      t.string :color,        null: false
      t.references :store,    foreign_key: true
      t.timestamps
    end
  end
end
