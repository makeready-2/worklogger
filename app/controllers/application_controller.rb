class ApplicationController < ActionController::Base
  # yikes :)
  skip_before_action :verify_authenticity_token
end
