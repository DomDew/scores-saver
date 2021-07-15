class Api::V1::MatchesController < Api::V1::BaseController
  before_action :find_match, only: %w[show update destroy]

  def index
    @user = current_user
    matches = Api::V1::Match.where(user: @user)
    render jsonapi: matches
  end

  def show
    render_json_match(@match)
  end

  def create
    @match = Api::V1::Match.new(match_params)
    @match.user = current_user
    @match.save!

    render_json_match(@match)
  end

  def update
    @match.update(match_params)

    render_json_match(@match)
  end

  def destroy
    render_json_match(@match.destroy)
  end

  private

  def render_json_match(match)
    if match.errors.empty?
      render jsonapi: match, include: { player_scores: :player_scores }
    else
      render jsonapi_errors: match.errors, status: 400
    end
  end

  def find_match
    @match = Api::V1::Match.find(params[:id])
  end

  def match_params
    params.require(:match).permit(:title, :battle_size, :mission, :result,
                                  player_scores_attributes: %i[attacker name faction primaries_score secondaries_score total_vp owner first_turn])
  end
end
