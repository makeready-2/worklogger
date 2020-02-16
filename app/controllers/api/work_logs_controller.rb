# frozen_string_literal: true

module Api
  class WorkLogsController < ApplicationController
    def clock_in
      work_log = WorkLog.create!(start: Time.now, user: current_user)
      render json: { workLog: work_log.serialize }, status: 200
    end

    def clock_out
      work_log = current_user.active_work_log
      work_log.end = Time.now
      work_log.save
      render json: {}, status: 200
    end
  end
end
