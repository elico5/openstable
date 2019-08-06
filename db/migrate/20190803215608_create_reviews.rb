class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :stable_id, null: false
      t.integer :user_id, null: false
      t.integer :overall, null: false
      t.integer :service, null: false
      t.integer :cleanliness, null: false
      t.integer :value, null: false
      t.text :body

      t.timestamps
    end

    add_index :reviews, :stable_id
    add_index :reviews, :user_id
  end
end
