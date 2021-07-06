class AddFirstTurnToPlayerScores < ActiveRecord::Migration[6.0]
  def change
    add_column :api_player_scores, :first_turn, :boolean
  end
end
