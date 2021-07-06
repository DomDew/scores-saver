class CreateApiMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :api_matches do |t|
      t.string :title
      t.string :battle_size
      t.string :mission
      t.numeric :result

      t.timestamps
    end
  end
end
