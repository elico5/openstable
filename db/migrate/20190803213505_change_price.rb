class ChangePrice < ActiveRecord::Migration[5.2]
  def change
    change_column :stables, :price, :integer
  end
end
