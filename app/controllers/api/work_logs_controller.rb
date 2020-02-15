module Api
  class WorkLogsController < BaseController
    def index
      render json: { work_logs: %w[foo bar baz]}.to_json
    end
  end
end
