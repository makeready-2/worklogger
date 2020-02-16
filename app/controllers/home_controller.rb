# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @initial_state = {
      user: current_user&.serialize,
      workLog: current_user&.active_work_log&.serialize,
      history: current_user&.work_logs&.map(&:serialize)
    }
  end
end
