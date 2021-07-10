# Tells the controller which attributes to return in a JSON:API response for a given user
# --> access encapsulated object through @object instance var
# For more information: http://jsonapi-rb.org/guides/serialization/defining.html

class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
end
