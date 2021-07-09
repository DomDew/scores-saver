# frozen_string_literal: true

FactoryBot.define do
  factory :match, class: 'api/match' do
    title { 'Tom vs Jerry' }
    battle_size { 'Incursion' }
    mission { 'Sweep and Clear' }
    user
  end
end