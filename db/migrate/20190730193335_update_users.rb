class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :riding_location, :integer
  end
end
