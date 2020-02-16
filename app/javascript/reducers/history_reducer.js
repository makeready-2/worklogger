import * as actions from "../actions/constants"

export default {
  reducer: (state, action) => {
    switch (action.type) {
      case actions.CLOCKED_OUT_WORK_LOG_ACTION:
      case actions.CLOCKED_IN_WORK_LOG_ACTION:
        return {
          ...state,
          [action.workLog.id]: action.workLog
        };
      case actions.LOGIN_USER_ACTION:
        return {
          ...action.history
        };
      case actions.LOGOUT_USER_ACTION:
        return {};
      default:
        return state
    }
  },
  initialState: {}
};
