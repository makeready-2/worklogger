class HomeController < ApplicationController
  def index
    @initial_state = {
      user: current_user&.to_json,
      work_log: current_user&.active_work_log&.to_json
    }
  end
end
