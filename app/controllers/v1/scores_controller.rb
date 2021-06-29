class V1::ScoresController < ApplicationController
	def index
		render json: { scores:
			[
			  {
					players: [
						{
							name: "Thorsten",
							cp: 12,
							roll_off: false,
							first_turn: false,
							fully_painted: true,
							primaries_score: 28,
							secondaries_score: 15,
							total: 53
						},
						{
							name: "Jules",
							cp: 9,
							roll_off: true,
							first_turn: true,
							fully_painted: true,
							primaries_score: 57,
							secondaries_score: 30,
							total: 97
						}
					]
				}
			] 
		}.to_json
	end
end
