# frozen_string_literal = true

require 'rails_helper'

describe Api::MatchesController, type: :request do
  let (:user) { build_user }

  context 'When fetching a users matches' do
    before do
      create(:match, user: user)
      login_with_api(user)
      get '/api/matches', headers: {
        'Authorization': response.headers['Authorization']
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'returns user matches' do
      expect(json['data']).to be_present
    end

    it 'matches are valid' do
      json['data'].each do |match|
        expect(match['type']).to eq('match')
      end
    end
  end
end
