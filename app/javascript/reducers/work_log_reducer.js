import * as actions from "../actions/constants"

export default {
  reducer: (state, action) => {
    switch (action.type) {
      case actions.CLOCKED_OUT_WORK_LOG_ACTION:
        return undefined;
      case actions.CLOCKED_IN_WORK_LOG_ACTION:
        return {
          ...action.workLog
        };
      default:
        return state
    }
  },
  initialState: {}
};
