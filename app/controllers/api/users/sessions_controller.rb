# frozen_string_literal: true

module Api
  class Users::SessionsController < Devise::SessionsController
    def create
      user = warden.authenticate(auth_options)
      if user
        sign_in(resource_name, user)
        render json: { user: user.serialize, log: user.active_work_log }
      else
        render json: {}, status: :unauthorized
      end
    end

    def destroy
      Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
      render json: {}
    end
  end
end
