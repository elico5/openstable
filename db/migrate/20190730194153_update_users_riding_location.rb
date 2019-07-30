class UpdateUsersRidingLocation < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :riding_location, false
  end
end
