class ChangeStablesIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :stables, :groom_id
    add_index :stables, :groom_id
  end
end
