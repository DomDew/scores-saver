class Api::Match < ApplicationRecord
  has_many :player_scores, foreign_key: 'api_match_id'

  belongs_to :user
end
