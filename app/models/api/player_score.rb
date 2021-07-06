class Api::PlayerScore < ApplicationRecord
  belongs_to :match, foreign_key: 'api_match_id'

  validates :name, :faction, :primaries_score, :secondaries_score, presence: true
  validates :owner, inclusion: { in: [true, false] }
end
