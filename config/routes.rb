Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do

  end

  # Forward all non-AJAX requests to the root (for react-router)
  get '*page', to: 'home#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }

  root to: "home#index"
end

