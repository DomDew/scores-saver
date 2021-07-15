# frozen_string_literal: true

FactoryBot.define do
  factory :match, class: 'api/v1/match' do
    title { 'Tom vs Jerry' }
    battle_size { 'incursion' }
    mission { 'Sweep and Clear' }
    user
  end
end
