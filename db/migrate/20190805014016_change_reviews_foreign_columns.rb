class ChangeReviewsForeignColumns < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :stable_id
    remove_index :reviews, :user_id
    remove_column :reviews, :stable_id
    remove_column :reviews, :user_id
  end
end
