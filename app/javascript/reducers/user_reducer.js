import * as actions from "../actions/constants"

export default {
  reducer: (state, action) => {
    switch (action.type) {
      case actions.UPDATE_USER_ACTION:
        return {
          ...action.user
        };
      default:
        return state
    }
  },
  initialState: {}
};
