class AddRefToApiMatches < ActiveRecord::Migration[6.0]
  def change
    add_reference :api_matches, :api_player_score, null: false, foreign_key: true
  end
end
