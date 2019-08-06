class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :stable_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :favorites, :stable_id
    add_index :favorites, :user_id
  end
end
