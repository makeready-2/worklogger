import * as actions from "../actions/constants"

export default {
  reducer: (state, action) => {
    switch (action.type) {
      case actions.LOGIN_USER_ACTION:
        return {
          ...action.user
        };
      case actions.LOGOUT_USER_ACTION:
        return {};
      default:
        return state
    }
  },
  initialState: {}
};
