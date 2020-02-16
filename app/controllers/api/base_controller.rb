# frozen_string_literal: true

module Api
  class BaseController

    protected

    def authorize_admin!
      return if current_user&.is_admin?

      throw new AuthorizationError('Current user is not admin')
    end

    def authorize_supervisor!(report_id)
      return if current_user&.supervises?(report_id)

      throw new AuthorizationError(
        "Current user does not supervise #{report_id}"
      )
    end
  end
end

class AuthorizationError < StandardError; end
