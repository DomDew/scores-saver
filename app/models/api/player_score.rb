class Api::PlayerScore < ApplicationRecord
  belongs_to :match, foreign_key: 'api_match_id'
end
