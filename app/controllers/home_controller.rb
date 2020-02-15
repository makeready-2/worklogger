class HomeController < ApplicationController
  def index
    @initial_state = {
      # user: current_user&.to_json,
      user: User.first.serialize,
      work_log: current_user&.active_work_log&.serialize
    }
  end
end
