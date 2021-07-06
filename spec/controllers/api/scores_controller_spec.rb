require 'rails_helper'

describe Api::ScoresController, type: :request do

  let (:user) { create_user }
  let (:login_url) { '/api/login' }

  context 'When fetching the current users scores' do
    before do
      login_with_api(user)
      user['scores'] = 5.times { create_score }
    end

    it 'returns the scores' do
      expect(response.body['scores']).to be_present
    end
  end
end
