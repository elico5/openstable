class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :stable_id, null: false
      t.integer :user_id, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.integer :party_size, null: false
      t.boolean :cancelled, null: false, default: false

      t.timestamps
    end

    add_index :reservations, :stable_id
    add_index :reservations, :user_id
  end
end
