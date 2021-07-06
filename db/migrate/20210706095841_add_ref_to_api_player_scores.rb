class AddRefToApiPlayerScores < ActiveRecord::Migration[6.0]
  def change
    add_reference :api_player_scores, :api_match, null: false, foreign_key: true
  end
end
