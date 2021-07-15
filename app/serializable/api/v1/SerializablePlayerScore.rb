# frozen_string_literal: true

class Api::V1::SerializablePlayerScore < JSONAPI::Serializable::Resource
  type 'player_score'

  attributes :attacker, :name, :faction, :primaries_score, :secondaries_score, :total_vp, :owner, :first_turn

  belongs_to :match
end
