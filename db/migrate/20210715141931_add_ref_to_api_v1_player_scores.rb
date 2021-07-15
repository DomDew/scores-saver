class AddRefToApiV1PlayerScores < ActiveRecord::Migration[6.0]
  def change
    add_reference :api_v1_player_scores, :api_v1_match, null: false, foreign_key: true
  end
end

