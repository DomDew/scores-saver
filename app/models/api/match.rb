class Api::Match < ApplicationRecord
  has_many :player_scores, foreign_key: 'api_match_id'

  validates :title, :battle_size, :mission, presence: true

  belongs_to :user

  # Allow to access games for the current_user to display statistics more easily
  def user_score
    player_scores.where(owner: true)
  end
end
