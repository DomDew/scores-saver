class RemoveRefFromApiV1PlayerScores < ActiveRecord::Migration[6.0]
  def change
    remove_column :api_v1_player_scores, :api_v1_match_id
  end
end
