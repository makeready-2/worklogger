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
      default:
        return state
    }
  },
  initialState: {
    history: {}
  }
};
