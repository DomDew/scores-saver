class Api::MatchesController < ApplicationController
  def index
    @user = current_user
    matches = Api::Match.where(user: @user)
    render jsonapi: matches
  end
end
