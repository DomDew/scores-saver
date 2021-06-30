Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    get 'scores', to: 'scores#index'
    resources :users, only: %w[show]
  end

  # manually set auth routes in path names to not conflict with devise's namespacing
  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/login',
      sign_out: 'api/logout',
      registration: 'api/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
