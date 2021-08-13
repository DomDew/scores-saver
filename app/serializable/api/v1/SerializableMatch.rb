# frozen_string_literal: true

# Tells the controller which attributes to return in a JSON:API response for a given match
# --> access encapsulated object through @object instance var
# For more information: http://jsonapi-rb.org/guides/serialization/defining.html

class Api::V1::SerializableMatch < JSONAPI::Serializable::Resource
  type 'match'

  attributes :title, :battle_size, :mission, :result

  attribute :date do
    @object.created_at.to_datetime.strftime('%Q').to_i
  end

  attribute :player_scores do
    @object.player_scores
  end

  belongs_to :user

  link :self do
    "http//localhost:3000/api/v1/matches#{@object.id}"
  end
end
