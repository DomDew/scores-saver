class Api::Match < ApplicationRecord
  # Accepts nested attributes to allow for saving player_scores alongside a match
  # --> Needs to set inverse_of: :match on player scores to pass validations for parent - child relation
  has_many :player_scores, foreign_key: 'api_match_id', inverse_of: :match
  accepts_nested_attributes_for :player_scores, allow_destroy: true

  validates :title, :battle_size, :mission, presence: true

  belongs_to :user

  # Allow to access games for the current_user to display statistics more easily
  def user_score
    player_scores.where(owner: true)
  end
end
