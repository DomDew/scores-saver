class Api::V1::BaseController < ApplicationController
  before_action :authenticate_user!

  rescue_from ActiveRecord::RecordInvalid, with: :bad_request
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def bad_request
    render json: {
      'errors': [
        'status': '400',
        'title': 'Bad request'
      ]
    }, status: 400
  end

  def user_exists
    render json: {
      'errors': [
        'status': '401',
        'title': 'User already exists'
      ]
    }
  end

  def not_found
    render json: {
      'errors': [
        {
          'status': '404',
          'title': 'Not Found'
        }
      ]
    }, status: 404
  end
end
