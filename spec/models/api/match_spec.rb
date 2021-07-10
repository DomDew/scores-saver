require 'rails_helper'

RSpec.describe Api::Match, type: :model do
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
  end
end
