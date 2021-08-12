# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning db...'
User.destroy_all
Api::V1::Match.destroy_all

puts 'Creating our friend Juergen...'
User.create!(email: 'juergen@dose.de', password: '123456!')
juergen = User.last

puts 'Creating matches for our friend Juergen...'
Api::V1::Match.create!(
  title: 'Juergen vs. Marko',
  battle_size: 'incursion',
  mission: 'Sweep and Clear',
  result: 'win',
  user: juergen,
  player_scores_attributes: [
    {
      name: 'Juergen',
      owner: true,
      attacker: false,
      first_turn: false,
      faction: 'Imperial Fists',
      primaries_score: 20,
      secondaries_score: 23,
      total_vp: 53
    },
    {
      name: 'Marko',
      owner: false,
      attacker: true,
      first_turn: true,
      faction: 'Death Guard',
      primaries_score: 15,
      secondaries_score: 17,
      total_vp: 42
    }
  ]
)

Api::V1::Match.create!(
  title: 'Juergen vs. Sandra',
  battle_size: 'strike_force',
  mission: 'Sweep and Clear',
  result: 'loss',
  user: juergen,
  player_scores_attributes: [
    {
      name: 'Juergen',
      owner: false,
      attacker: true,
      first_turn: true,
      faction: 'Imperial Fists',
      primaries_score: 10,
      secondaries_score: 15,
      total_vp: 35
    },
    {
      name: 'Sandra',
      owner: true,
      attacker: false,
      first_turn: false,
      faction: 'Drukhari',
      primaries_score: 43,
      secondaries_score: 20,
      total_vp: 73
    }
  ]
)

Api::V1::Match.create!(
  title: 'Juergen vs. Harald',
  battle_size: 'strike_force',
  mission: 'Sweep and Clear',
  result: 'win',
  user: juergen,
  player_scores_attributes: [
    {
      name: 'Juergen',
      owner: false,
      attacker: true,
      first_turn: true,
      faction: 'Death Guard',
      primaries_score: 25,
      secondaries_score: 30,
      total_vp: 65
    },
    {
      name: 'Harald',
      owner: true,
      attacker: false,
      first_turn: false,
      faction: "T'AU",
      primaries_score: 10,
      secondaries_score: 14,
      total_vp: 34
    }
  ]
)

puts "All done!"
