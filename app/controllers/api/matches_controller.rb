class Api::MatchesController < Api::BaseController
  before_action :find_match, only: %w[show update]

  def index
    @user = current_user
    matches = Api::Match.where(user: @user)
    render jsonapi: matches
  end

  def show
    render_jsonapi_response(@match)
  end

  def create
    @match = Api::Match.new(match_params)
    @match.user = current_user
    @match.save

    render_jsonapi_response(@match)
  end

  def update
    @match.update(match_params)

    render_jsonapi_response(@match)
  end

  private

  def find_match
    @match = Api::Match.find(params[:id])
  end

  def match_params
    params.permit(:title, :battle_size, :mission, :result)
  end
end
