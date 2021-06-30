Rails.application.routes.draw do
  devise_for :users
  namespace :v1, defaults: { format: 'json' } do
    get 'scores', to: 'scores#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
