# frozen_string_literal: true

module Api
  class Users::SessionsController < Devise::SessionsController

    # before_action :configure_sign_in_params, only: [:create]

    # POST /resource/sign_in
    def create
      user = warden.authenticate!(auth_options)
      sign_in(resource_name, user)
      render json: { user: user.serialize }
    end

    # DELETE /resource/sign_out
    def destroy
      Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
      render json: {}
    end

    # protected

    # If you have extra params to permit, append them to the sanitizer.
    # def configure_sign_in_params
    #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
    # end
  end
end
