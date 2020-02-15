# frozen_string_literal: true

module Api
  class WorkLogsController < BaseController
    before_action :authenticate_user!

    def index
      render json: { work_logs: %w[foo bar baz] }.to_json
    end
  end
end
