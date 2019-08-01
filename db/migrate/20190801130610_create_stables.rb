class CreateStables < ActiveRecord::Migration[5.2]
  def change
    create_table :stables do |t|
      t.string :name, null: false
      t.string :phone_number, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :region, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :groom_id, null: false
      t.text :description, null: false
      t.integer :capacity, null: false
      t.time :open_time, null: false
      t.time :close_time, null: false
      t.integer :duration, null: false
      t.float :price, null: false

      t.timestamps
    end

    add_index :stables, :street_address, unique: true
    add_index :stables, :groom_id, unique: true
  end
end
