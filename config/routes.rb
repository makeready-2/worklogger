Rails.application.routes.draw do
  scope :api do
    devise_for :users, only: %i[sessions registrations], controllers: {
      sessions: 'api/users/sessions',
      registrations: 'api/users/registrations'
    }

    post 'work_logs/clock_in', to: 'api/work_logs#clock_in'
    post 'work_logs/clock_out', to: 'api/work_logs#clock_out'
  end

  # Delegates all non-AJAX requests to the Router component
  get '*page', to: 'home#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }

  root to: "home#index"
end

