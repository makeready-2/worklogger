class HomeController < ApplicationController
  def index
    @initial_state = {
      user: current_user&.serialize,
      workLog: current_user&.active_work_log&.serialize
    }
  end
end
