# Tells the controller which attributes to return in a JSON:API response for a given match
# --> access encapsulated object through @object instance var
# For more information: http://jsonapi-rb.org/guides/serialization/defining.html

class Api::SerializableMatch < JSONAPI::Serializable::Resource
  type 'match'

  attributes :title, :battle_size, :mission, :result

  attribute :date do
    @object.created_at
  end

  belongs_to :user

  link :self do
    "http//localhost:3000/api/matches#{@object.id}"
  end
end
