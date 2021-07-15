class Api::V1::PlayerScore < ApplicationRecord
  belongs_to :match, foreign_key: 'api_v1_match_id'

  validates :name, :faction, :primaries_score, :secondaries_score, presence: true
  validates :owner, :attacker, :first_turn, inclusion: { in: [true, false] }
end
