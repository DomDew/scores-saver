class Api::Match < ApplicationRecord
  has_many :api_player_scores
  has_one :api_player_score, as: :user_score
  has_one :api_player_score, as: :opponent_score
end
