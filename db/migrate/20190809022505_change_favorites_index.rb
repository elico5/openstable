class ChangeFavoritesIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:stable_id, :user_id], unique: true
  end
end
