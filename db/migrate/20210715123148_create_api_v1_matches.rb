class CreateApiV1Matches < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_matches do |t|
      t.string :title
      t.string :battle_size
      t.string :mission
      t.string :result
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
