# frozen_string_literal: true

module Api
  class Users::RegistrationsController < Devise::RegistrationsController
    def create
      user = User.create!(sign_up_params)
      if user.persisted?
        sign_up(resource_name, user)
        render json: { user: user.serialize }
      else
        clean_up_passwords user
        render status: 422
      end
    end

    protected

    def sign_up_params
      params.permit(%i[name email password password_confirmation])
    end
  end
end
