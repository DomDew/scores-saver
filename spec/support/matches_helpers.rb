require 'factory_bot_rails'

module MatchesHelpers
  def build_opponent_score
    FactoryBot.build(
      :player_score,
        name: 'Jerry',
        owner: false,
        attacker: true,
        first_turn: true,
        faction: 'Death Guard',
        primaries_score: 35,
        secondaries_score: 34,
        total_vp: 79
    )
  end
end
