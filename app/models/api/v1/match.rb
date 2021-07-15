class Api::V1::Match < ApplicationRecord
  # Accepts nested attributes to allow for saving player_scores alongside a match
  # --> Needs to set inverse_of: :match on player scores to pass validations for parent - child relation
  has_many :player_scores, foreign_key: 'api_v1_match_id', inverse_of: :match, dependent: :destroy
  accepts_nested_attributes_for :player_scores, allow_destroy: true

  validates :title, :battle_size, :mission, presence: true
  validates :title, uniqueness: true
  validates :battle_size, inclusion: { in: %w[combat_patrol incursion strike_force onslaught] }

  belongs_to :user

  # Allow to access games for the current_user to display statistics more easily
  def user_score
    player_scores.where(owner: true)
  end
end
