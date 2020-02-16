import * as actions from "../actions/constants"

export default {
  reducer: (state, action) => {
    switch (action.type) {
      case actions.UPDATE_FORM_USER_ACTION:
        return {
          ...state,
          [action.field]: action.value
        };
      case actions.CLEAR_FORM_USER_ACTION:
        return {
          ...state,
          password: undefined,
          passwordConfirmation: undefined,
          error: undefined
        };
      case actions.FORM_ERROR_USER_ACTION:
        return {
          ...state,
          error: action.error
        };
      case actions.LOGIN_USER_ACTION:
      case actions.LOGOUT_USER_ACTION:
        return {};
      default:
        return state
    }
  },
  initialState: {}
};

