class CreateApiPlayerScores < ActiveRecord::Migration[6.0]
  def change
    create_table :api_player_scores do |t|
      t.boolean :attacker
      t.string :name
      t.string :faction
      t.numeric :primaries_score
      t.numeric :secondaries_score
      t.numeric :total_vp

      t.timestamps
    end
  end
end
