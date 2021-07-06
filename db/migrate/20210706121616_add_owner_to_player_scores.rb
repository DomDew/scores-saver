class AddOwnerToPlayerScores < ActiveRecord::Migration[6.0]
  def change
    add_column :api_player_scores, :owner, :boolean
  end
end
