class CreateApiV1PlayerScores < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_player_scores do |t|
      t.boolean :attacker
      t.boolean :first_turn
      t.boolean :owner
      t.string :name
      t.string :faction
      t.integer :primaries_score
      t.integer :secondaries_score
      t.integer :total_vp
      t.references :api_v1_match

      t.timestamps
    end
  end
end
