# frozen_string_literal: true

class Api::PlayerScore < ApplicationRecord
  belongs_to :match, foreign_key: 'api_match_id'

  validates :name, :faction, :primaries_score, :secondaries_score, presence: true
  validates :owner, :attacker, :first_turn, inclusion: { in: [true, false] }
end
