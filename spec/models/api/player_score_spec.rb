# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::PlayerScore, type: :model do
  let(:user) { build_user }

  it 'Returns a valid score' do
    score = build(:player_score)

    expect(score).to be_present
  end

  context 'When creating scores for a match' do
    it 'allows for the creation of 2 scores' do
      match = build(:match, user: user)

      user_score = create(:player_score, match: match)
      opponent_score = create(
        :player_score,
        match: match,
        name: 'Jerry',
        owner: false,
        attacker: true,
        first_turn: true,
        faction: 'Death Guard',
        primaries_score: 35,
        secondaries_score: 34,
        total_vp: 79
      )

      expect(user_score).to be_present
      expect(opponent_score).to be_present
    end
  end
end
