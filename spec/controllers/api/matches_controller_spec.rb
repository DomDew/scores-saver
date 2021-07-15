# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::MatchesController, type: :request do
  let(:user) { build_user }
  let(:created_user) { create_user }
  let(:opponent_score) { build_opponent_score }

  context 'When fetching a users matches' do
    before do
      create(:match, user: user)
      login_with_api(user)
      get '/api/v1/matches', headers: {
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
      create(:player_score, match: match)
      create(:player_score, name: 'Thorsten', match: match)
      login_with_api(user)
      get "/api/v1/matches/#{match.id}", headers: {
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

    it 'returns matches player scores' do
      expect(json['data']['relationships']).to have_key('player_scores')
    end
  end

  context 'When creating a match' do
    before do
      match = build(:match)
      owner_score = build(:player_score)

      login_with_api(created_user)
      post '/api/v1/matches', headers: {
        'Authorization': response.headers['Authorization']
      },
                           params: {
                             match: {
                               title: match.title,
                               battle_size: match.battle_size,
                               mission: match.mission,
                               result: 'win',
                               player_scores_attributes: [
                                 {
                                   name: owner_score.name,
                                   owner: owner_score.owner,
                                   attacker: owner_score.attacker,
                                   first_turn: owner_score.first_turn,
                                   faction: owner_score.faction,
                                   primaries_score: owner_score.primaries_score,
                                   secondaries_score: owner_score.secondaries_score,
                                   total_vp: owner_score.total_vp
                                 },
                                 {
                                   name: opponent_score.name,
                                   owner: opponent_score.owner,
                                   attacker: opponent_score.attacker,
                                   first_turn: opponent_score.first_turn,
                                   faction: opponent_score.faction,
                                   primaries_score: opponent_score.primaries_score,
                                   secondaries_score: opponent_score.secondaries_score,
                                   total_vp: opponent_score.total_vp
                                 }
                               ]
                             }
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

  context 'When creating an invalid match' do
    before do
      match = build(:match, battle_size: 'Not in the list')
      owner_score = build(:player_score)

      login_with_api(created_user)
      post '/api/v1/matches', headers: {
        'Authorization': response.headers['Authorization']
      },
                           params: {
                             match: {
                               title: match.title,
                               battle_size: match.battle_size,
                               mission: match.mission,
                               result: 'win',
                               player_scores_attributes: [
                                 {
                                   name: owner_score.name,
                                   owner: owner_score.owner,
                                   attacker: owner_score.attacker,
                                   first_turn: owner_score.first_turn,
                                   faction: owner_score.faction,
                                   primaries_score: owner_score.primaries_score,
                                   secondaries_score: owner_score.secondaries_score,
                                   total_vp: owner_score.total_vp
                                 },
                                 {
                                   name: opponent_score.name,
                                   owner: opponent_score.owner,
                                   attacker: opponent_score.attacker,
                                   first_turn: opponent_score.first_turn,
                                   faction: opponent_score.faction,
                                   primaries_score: opponent_score.primaries_score,
                                   secondaries_score: opponent_score.secondaries_score,
                                   total_vp: opponent_score.total_vp
                                 }
                               ]
                             }
                           }
    end

    it 'returns 400' do
      expect(response.status).to eq(400)
    end
  end

  context 'When updating a match' do
    before do
      match = create(:match, user: created_user)
      create(:player_score, match: match)

      login_with_api(created_user)
      patch "/api/v1/matches/#{match.id}", headers: {
        'Authorization': response.headers['Authorization']
      },
                                        params: {
                                          match: {
                                            result: 'win'
                                          }
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

  context 'When deleting a match' do
    before do
      match1 = create(:match, user: created_user)
      create(:player_score, match: match1)
      login_with_api(created_user)
      delete "/api/v1/matches/#{match1.id}", headers: {
        'Authorization': response.headers['Authorization']
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'deletes the match' do
      match2 = create(:match, title: 'Jerry vs Tom', user: created_user)
      expect(Api::V1::Match.all[0]).to eq(match2)
    end
  end

  context 'When a match is missing' do
    before do
      login_with_api(created_user)
      get '/api/v1/matches/blank', headers: {
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
      get "/api/v1/matches/#{match.id}"
    end

    it 'returns 401' do
      expect(response.status).to eq(401)
    end
  end
end
