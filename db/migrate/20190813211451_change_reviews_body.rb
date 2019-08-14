class ChangeReviewsBody < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :body, :text, null: false
  end
end
