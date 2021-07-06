require 'faker'
require 'factory_bot_rails'

module ScoreHelpers
  def create_score
    user_name = Faker::Esport.player
    opponent_name = Faker::Esport.player

    FactoryBot.create(:score,
      title: "#{user_name} vs #{opponent_name}",
      battle_size: ['Incursion', 'Strike Force', 'Combat Patrol'].sample,
      user_score: {
        attacker: [true, false].sample,
        name: user_name,
        faction: ['Death Guard', 'Imperial Fists', 'Tyranids', 'Eldar', 'Tau'].sample,
        primaries_score: rand(10..45),
        secondaries_score: rand(10..45)
      },
      opponent_score: {
        name: opponent_name,
        faction: ['Death Guard', 'Imperial Fists', 'Tyranids', 'Eldar', 'Tau'].sample,
        primaries_score: rand(10..45),
        secondaries_score: rand(10..45)
      }
    )
  end

  def build_score
    user_name = Faker::Esport.player
    opponent_name = Faker::Esport.player

    FactoryBot.build(:score,
      title: "#{user_name} vs #{opponent_name}",
      battle_size: ['Incursion', 'Strike Force', 'Combat Patrol'].sample,
      user_score: {
        attacker: [true, false].sample,
        name: user_name,
        faction: ['Death Guard', 'Imperial Fists', 'Tyranids', 'Eldar', 'Tau'].sample,
        primaries_score: rand(10..45),
        secondaries_score: rand(10..45)
      },
      opponent_score: {
        name: opponent_name,
        faction: ['Death Guard', 'Imperial Fists', 'Tyranids', 'Eldar', 'Tau'].sample,
        primaries_score: rand(10..45),
        secondaries_score: rand(10..45)
      }
    )
  end
end
