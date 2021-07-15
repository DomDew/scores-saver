# frozen_string_literal: true

FactoryBot.define do
  factory :player_score, class: 'api/v1/player_score' do
    name { 'Tom' }
    owner { true }
    attacker { false }
    first_turn { false }
    faction { 'Imperial Fists' }
    primaries_score { 20 }
    secondaries_score { 23 }
    total_vp { 53 }
    match
  end
end
