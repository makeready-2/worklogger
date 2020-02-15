Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do

  end

  scope :api do
    devise_for :users, only: %i[sessions registrations]

    resources :work_logs
  end

  # Delegates all non-AJAX requests to the Router component
  get '*page', to: 'home#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }



  root to: "home#index"
end

