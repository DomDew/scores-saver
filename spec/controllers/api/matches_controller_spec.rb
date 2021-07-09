# frozen_string_literal = true

require 'rails_helper'

describe Api::MatchesController, type: :request do
  let (:user) { build_user }
  let (:created_user) { create_user }

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

  context 'When fetching a match' do
    before do
      match = create(:match, user: user)
      login_with_api(user)
      get "/api/matches/#{match.id}", headers: {
        'Authorization': response.headers['Authorization']
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'returns the match' do
      expect(json['data']).to be_present
      expect(json['data']).to have_type('match')
    end
  end

  context 'When creating a match' do
    before do
      match = build(:match)
      login_with_api(created_user)
      post '/api/matches', headers: {
        'Authorization': response.headers['Authorization']
      },
      params: {
        title: match.title,
        battle_size: match.battle_size,
        mission: match.mission,
        result: 'win'
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'returns the match' do
      expect(json['data']).to be_present
      expect(json['data']).to have_type('match')
      expect(json['data']['id']).to be_present
      expect(json['data']['attributes']['title']).to be_present
    end
  end

  context 'When updating a match' do
    before do
      match = create(:match, user: created_user)
      login_with_api(created_user)
      patch "/api/matches/#{match.id}", headers: {
        'Authorization': response.headers['Authorization']
      },
      params: {
        result: 'win'
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'returns the match' do
      expect(json['data']).to be_present
      expect(json['data']).to have_type('match')
      expect(json['data']['id']).to be_present
      expect(json['data']['attributes']['title']).to be_present
    end
  end

  context 'When a match is missing' do
    before do
      login_with_api(created_user)
      get '/api/matches/blank', headers: {
        'Authorization': response.headers['Authorization']
      }
    end

    it 'returns 404' do
      expect(response.status).to eq(404)
    end
  end

  context 'When the Authorization header is missing' do
    before do
      match = create(:match, user: user)
      get "/api/matches/#{match.id}"
    end

    it 'returns 401' do
      expect(response.status).to eq(401)
    end
  end
end
