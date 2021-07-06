class AddRefToMatches < ActiveRecord::Migration[6.0]
  def change
    add_reference :api_matches, :user, null: false, foreign_key: true
  end
end
