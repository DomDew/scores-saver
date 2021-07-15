require 'rails_helper'

RSpec.describe Api::V1::Match, type: :model do
  let(:user) { build_user }

  it 'Returns a valid match' do
    match = build(:match)

    expect(match).to be_present
  end

  context 'When creating a new match' do
    it 'sets associations correctly' do
      created_match = create(:match, user: user)

      expect(created_match).to be_present
    end

    it 'returns 400 for an invalid match' do
      create(:match, user: user, battle_size: 'Not in the list')

      expect(response.status).to eq(400)
    end
  end
end
